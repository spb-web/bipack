import type { FieldType } from '../types'
import { BIGINT, BIGUINT, BOOLEAN, HEX, INT, UINT } from '../StructTypes'
import { isHex } from './isHex'
import { BITS_IN_BYTE } from '../constants'

const createValidationError = (key: string, cause: string) => (
  new Error(`[parseValue]: Value of "${key}" is ${cause}`)
)

export const parseValue = (value: unknown, key: string, {type, size}: FieldType): bigint => { 
  let number: bigint

  switch (type) {
    case HEX:
      if (typeof value !== 'string' || !isHex(value)) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case UINT:
      if (typeof value !== 'number' || number < 0) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case BIGUINT:
      if (typeof value !== 'bigint' || number < 0n) {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt(value)
      break
    case INT:
      if (typeof value !== 'number') {
        throw createValidationError(key, `not ${type}`)
      }
      number = BigInt.asUintN(size * BITS_IN_BYTE, BigInt(value))

      break
    case BIGINT:
      if (typeof value !== 'bigint') {
        throw createValidationError(key, `not ${type}`)
      }

      number = BigInt.asUintN(size * BITS_IN_BYTE, value)

      break
    case BOOLEAN:
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
    console.log(type, size, number, 2n ** BigInt(size * BITS_IN_BYTE))
    throw createValidationError(key, `too large; Max size is ${size} bytes`)
  }

  return number
}
