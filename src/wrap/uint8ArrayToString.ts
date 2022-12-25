export const uint8ArrayToString = (bytes: Uint8Array): string => {
  const chars = []
  for(let i = 0, n = bytes.length; i < n;) {
    chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff))
  }
  return String.fromCharCode.apply(null, chars)
}
