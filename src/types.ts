import type { StructTypes } from './StructTypes'

export type FieldType = {
  [P in keyof typeof StructTypes]: typeof StructTypes[P]
}[keyof typeof StructTypes]

export type Struct = {
  [key: string]: FieldType
}

export type ParsedStruct<T extends Struct> = {
  [P in keyof T]: {
    offset: number,
    struct: FieldType,
  }
}

export type StructType<T extends Struct> = {
  [P in keyof T]: (
    T[P]['type'] extends 'hex'
      ? string
      : T[P]['type'] extends 'bigint'
        ? bigint
        : T[P]['type'] extends 'number'
          ? number
          : T[P]['type'] extends 'boolean'
            ? boolean
            : unknown
  )
}
