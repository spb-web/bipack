import { BITS_IN_BYTE } from '../constants'

export const stringToUint8Array = (str: string): Uint8Array => {
  const bytes = new Uint8Array(str.length * 2)

  for(let i = 0, n = str.length; i < n; i++) {
    const byteIndex = (i + 1) * 2 - 1
    const char = str.charCodeAt(i)

    bytes[byteIndex - 1] = char >>> BITS_IN_BYTE
    bytes[byteIndex] = char & 0xFF
  }

  return bytes
}
