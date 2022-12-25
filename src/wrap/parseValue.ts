import type { FieldType } from '../types'
import {
  DATA_TYPE_BIGINT,
  DATA_TYPE_BIGUINT,
  DATA_TYPE_BOOLEAN,
  DATA_TYPE_HEX,
  DATA_TYPE_INT,
  DATA_TYPE_UINT
} from '../constants'
import { isHex } from './isHex'
import { BITS_IN_BYTE } from '../constants'

const createValidationError = (key: string, cause: string) => (
  new Error(`[parseValue]: Value of "${key}" is ${cause}`)
)

export const parseValue = (value: unknown, key: string, { type, size }: FieldType): bigint => { 
  let number: bigint

  switch (type) {
    case DATA_TYPE_HEX:
      if (typeof value !== 'string' || !isHex(value)) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case DATA_TYPE_UINT:
      if (typeof value !== 'number' || (number < 0)) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case DATA_TYPE_BIGUINT:
      if (typeof value !== 'bigint' || (number < 0n)) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case DATA_TYPE_INT:
      if (typeof value !== 'number') {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt.asUintN(size * BITS_IN_BYTE, BigInt(value))

      break
    case DATA_TYPE_BIGINT:
      if (typeof value !== 'bigint') {
        throw createValidationError(key, `not ${type}`)
      }

      number = BigInt.asUintN(size * BITS_IN_BYTE, value)

      break
    case DATA_TYPE_BOOLEAN:
      if (typeof value !== 'boolean') {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    default: {
      throw createValidationError(key, 'not correct')
    }
  }

  if (number >= 2n ** BigInt(size * BITS_IN_BYTE)) {
    throw createValidationError(key, `too large; Max size is ${size} bytes`)
  }

  return number
}
