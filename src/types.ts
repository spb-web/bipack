import type {
  DATA_TYPE_BIGINT,
  DATA_TYPE_BIGUINT,
  DATA_TYPE_BOOLEAN,
  DATA_TYPE_HEX,
  DATA_TYPE_INT,
  DATA_TYPE_UINT
} from './constants'

export type FieldType = {
  size: number,
  type: (
    typeof DATA_TYPE_HEX 
    | typeof DATA_TYPE_BOOLEAN 
    | typeof DATA_TYPE_INT 
    | typeof DATA_TYPE_UINT
    | typeof DATA_TYPE_BIGINT
    | typeof DATA_TYPE_BIGUINT
  ),
}

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
