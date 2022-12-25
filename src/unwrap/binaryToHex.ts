import { binaryToBigNumber } from './binaryToBigNumber'

export const binaryToHex = (dataView: DataView, offset: number, size: number): string => (
  `0x${binaryToBigNumber(dataView, offset, size, true).toString(16)}`
)
