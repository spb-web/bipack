import type { ParsedStruct, Struct, StructType } from './types'
import { pushUint8 } from './wrap/pushUint8'
import { BIGINT, BIGUINT, BOOLEAN, HEX, INT, UINT } from './StructTypes'
import { parseValue } from './wrap/parseValue'
import { uint8ArrayToString } from './wrap/uint8ArrayToString'
import { binaryToHex } from './unwrap/binaryToHex'
import { binaryToBigNumber } from './unwrap/binaryToBigNumber'
import { binaryToNumber } from './unwrap/binaryToNumber'
import { binaryToBoolean } from './unwrap/binaryToBoolean'
import { stringToUint8Array } from './unwrap/stringToUint8Array'

export class Bipack<T extends Struct> {
  public readonly struct: ParsedStruct<T>
  public readonly size: number

  constructor(struct: T) {
    const {parsedStruct, offset: size} = (Object.keys(struct) as Extract<keyof T, string>[])
      .sort()
      .reduce(
        (previousValue, key) => {
          previousValue.parsedStruct[key] = {
            offset: previousValue.offset,
            struct: struct[key],
          }
          previousValue.offset += struct[key].size

          return previousValue
        },
        {parsedStruct: {} as ParsedStruct<T>, offset: 0},
      )

    this.struct = parsedStruct
    this.size = size
  }

  wrap(data: StructType<T>): Uint8Array {
    const binaryData = new Uint8Array(this.size)

    for (const key in this.struct) {
      const value = data[key]
      const {offset, struct} = this.struct[key]
      const parsedValue = parseValue(value, key, struct)
  
      pushUint8(binaryData, offset, parsedValue, struct.size)
    }

    return binaryData
  }

  wrapToString(data: StructType<T>): string {
    return uint8ArrayToString(this.wrap(data))
  }

  unwrap(binaryData: Uint8Array): StructType<T> {
    const data = {} as StructType<T>
    const dataView = new DataView(binaryData.buffer)

    for (const key in this.struct) {
      const {offset, struct: {size, type}} = this.struct[key]

      switch (type) {
        case HEX:
          data[key] = binaryToHex(dataView, offset, size) as StructType<T>[typeof key]
          break
        case UINT:
          data[key] = binaryToNumber(dataView, offset, size, true) as StructType<T>[typeof key]
          break
        case BIGUINT:
          data[key] = binaryToBigNumber(dataView, offset, size, true) as StructType<T>[typeof key]
          break
        case INT:
          data[key] = binaryToNumber(dataView, offset, size, false) as StructType<T>[typeof key]
          break
        case BIGINT:
          data[key] = binaryToBigNumber(dataView, offset, size, false) as StructType<T>[typeof key]
          break
        case BOOLEAN:
          data[key] = binaryToBoolean(dataView, offset) as StructType<T>[typeof key]
          break
      
        default:
          throw new Error()
      }
    }

    return data
  }

  unwrapFromString(stringData: string) {
    return this.unwrap(stringToUint8Array(stringData))
  }
}
