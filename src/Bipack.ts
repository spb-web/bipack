import type { ParsedStruct, Struct, StructType } from './types'
import { pushUint8 } from './wrap/pushUint8'
import {
  DATA_TYPE_BIGINT,
  DATA_TYPE_BIGUINT,
  DATA_TYPE_BOOLEAN,
  DATA_TYPE_HEX,
  DATA_TYPE_INT,
  DATA_TYPE_UINT
} from './constants'
import { parseValue } from './wrap/parseValue'
import { binaryToHex } from './unwrap/binaryToHex'
import { binaryToBigNumber } from './unwrap/binaryToBigNumber'
import { binaryToNumber } from './unwrap/binaryToNumber'
import { binaryToBoolean } from './unwrap/binaryToBoolean'

export class Bipack<T extends Struct> {
  public readonly struct: ParsedStruct<T>
  public readonly size: number

  constructor(struct: T) {
    const { parsedStruct, offset: size } = (Object.keys(struct) as Extract<keyof T, string>[])
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
        { parsedStruct: {} as ParsedStruct<T>, offset: 0 },
      )

    this.struct = parsedStruct
    this.size = size
  }

  wrap(data: StructType<T>): Uint8Array {
    const binaryData = new Uint8Array(this.size)

    for (const key in this.struct) {
      const value = data[key]
      const { offset, struct } = this.struct[key]
      const parsedValue = parseValue(value, key, struct)
  
      pushUint8(binaryData, offset, parsedValue, struct.size)
    }

    return binaryData
  }

  unwrap(binaryData: Uint8Array): StructType<T> {
    const data = {} as StructType<T>
    const dataView = new DataView(binaryData.buffer)

    for (const key in this.struct) {
      const { offset, struct: { size, type } } = this.struct[key]

      switch (type) {
        case DATA_TYPE_HEX:
          data[key] = binaryToHex(dataView, offset, size) as StructType<T>[typeof key]
          break
        case DATA_TYPE_UINT:
          data[key] = binaryToNumber(dataView, offset, size, true) as StructType<T>[typeof key]
          break
        case DATA_TYPE_BIGUINT:
          data[key] = binaryToBigNumber(dataView, offset, size, true) as StructType<T>[typeof key]
          break
        case DATA_TYPE_INT:
          data[key] = binaryToNumber(dataView, offset, size, false) as StructType<T>[typeof key]
          break
        case DATA_TYPE_BIGINT:
          data[key] = binaryToBigNumber(dataView, offset, size, false) as StructType<T>[typeof key]
          break
        case DATA_TYPE_BOOLEAN:
          data[key] = binaryToBoolean(dataView, offset) as StructType<T>[typeof key]
          break
      
        default:
          throw new Error()
      }
    }

    return data
  }
}
