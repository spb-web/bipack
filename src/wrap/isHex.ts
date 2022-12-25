const hexRegexp = /^0x[0-9A-Fa-f]{1,}$/g

export const isHex = (value: unknown): boolean => {
  if (typeof value !== 'string') {
    return false
  }

  const result = hexRegexp.test(value)

  hexRegexp.lastIndex = 0

  return result
}
