import { binaryToBigNumber } from './binaryToBigNumber'

export const binaryToNumber = (dataView: DataView, offset: number, bytesSize: number, isUnsigned: boolean): number => {
  return Number(binaryToBigNumber(dataView, offset, bytesSize, isUnsigned))
}
