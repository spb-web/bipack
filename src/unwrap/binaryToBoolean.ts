export const binaryToBoolean = (dataView: DataView, offset: number): boolean => {
  const parseValue = dataView.getUint8(offset) ^ 1

  switch (parseValue) {
    case 0:
      return true
    case 1:
      return false
  
    default:
      throw new Error()
  }
}
