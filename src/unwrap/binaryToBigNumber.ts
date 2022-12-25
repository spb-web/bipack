import { BITS_IN_BYTE } from '../constants'

export const binaryToBigNumber = (dataView: DataView, offset: number, size: number, isUnsigned: boolean): bigint => {
  let number = 0n

  for (let index = offset + size - 1; index >= offset; index--) {
    number |= BigInt(dataView.getUint8(index)) << BigInt((index - offset) * BITS_IN_BYTE)
  }

  return isUnsigned ? number : BigInt.asIntN(size * BITS_IN_BYTE, number)
}
