
import { BITS_IN_BYTE, BITS_IN_BYTE_N } from '../src/constants'
import {
  DATA_TYPE_BIGINT,
  DATA_TYPE_BIGUINT,
  DATA_TYPE_BOOLEAN,
  DATA_TYPE_HEX,
  DATA_TYPE_INT,
  DATA_TYPE_UINT
} from '../src/constants'
import { FieldType } from '../src/types'

export const getTestValues = (dataType: FieldType) => {
  switch (dataType.type) {
    case DATA_TYPE_HEX:
      return [
        '0x0',
        // 10101010...
        `0x${'a'.repeat(dataType.size)}`,
        // 11111111...
        `0x${'f'.repeat(dataType.size)}`,
        // 10101010...
        `0x${'a'.repeat(Math.ceil(dataType.size / 2))}`,
        // 11111111...
        `0x${'f'.repeat(Math.ceil(dataType.size / 2))}`,
      ]

    case DATA_TYPE_UINT:
      return [
        0,
        // 11111111...
        (2 ** (dataType.size * BITS_IN_BYTE)) - 1,
      ]

    case DATA_TYPE_INT:
      return [
        0,
        1,
        // 011111111...
        ((2 ** (dataType.size * BITS_IN_BYTE)) >> 1) - 1,
        -1,
        // 111111111...
        -(((2 ** (dataType.size * BITS_IN_BYTE)) >> 1) - 1),
      ]

    case DATA_TYPE_BIGUINT:
      return [
        0n,
        // 11111111...
        (2n ** (BigInt(dataType.size) * BITS_IN_BYTE_N)) - 1n,
      ]

    case DATA_TYPE_BIGINT:
      return [
        0n,
        1n,
        // 01111111...
        ((2n ** (BigInt(dataType.size) * BITS_IN_BYTE_N)) >> 1n) - 1n,
        -1n,
        // 11111111...
        -(((2n ** (BigInt(dataType.size) * BITS_IN_BYTE_N)) >> 1n) - 1n),
      ]

    case DATA_TYPE_BOOLEAN:
      return [true, false]
  
    default:
      throw new Error()
  }
}
