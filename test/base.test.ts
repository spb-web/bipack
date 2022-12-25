import { StructTypes } from '../src/StructTypes'
import { Bipack } from '../src/Bipack'
import { getTestValues } from './getTestValues'

describe('base', () => {
  Object.entries(StructTypes).forEach(([type, dataType]) => {
    const bipack = new Bipack({
      testValue: dataType,
    })
  
    getTestValues(dataType).forEach((testValue) => {
      const input = { testValue }
  
      describe(`[${type}] value: ${testValue.toString()}`, () => {
        it('Uint8Array', () => {
          const uint8Array = bipack.wrap(input)
          const unwrapFromUint8Array = bipack.unwrap(uint8Array)
    
          expect(input).toEqual(unwrapFromUint8Array)
        })
      })
    })
  })
})
