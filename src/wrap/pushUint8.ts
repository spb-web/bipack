import { BITS_IN_BYTE_N } from '../constants'

export const pushUint8 = (binaryData: Uint8Array, arrayIndex: number, value: bigint, size: number) => {
  let number = value
  let int8: number

  for (let index = 0; index < size; index++) {
    int8 = Number(number & 0xffn)

    binaryData[arrayIndex + index] = int8
    number >>= BITS_IN_BYTE_N
  }
}
