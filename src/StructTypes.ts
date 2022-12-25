import {
  DATA_TYPE_BIGINT,
  DATA_TYPE_BIGUINT,
  DATA_TYPE_BOOLEAN,
  DATA_TYPE_HEX,
  DATA_TYPE_INT,
  DATA_TYPE_UINT
} from './constants'

export const StructTypes = <const>{
  bytes1: {
    size: 1,
    type: DATA_TYPE_HEX,
  },
  bytes2: {
    size: 2,
    type: DATA_TYPE_HEX,
  },
  bytes3: {
    size: 3,
    type: DATA_TYPE_HEX,
  },
  bytes4: {
    size: 4,
    type: DATA_TYPE_HEX,
  },
  bytes5: {
    size: 5,
    type: DATA_TYPE_HEX,
  },
  bytes6: {
    size: 6,
    type: DATA_TYPE_HEX,
  },
  bytes7: {
    size: 7,
    type: DATA_TYPE_HEX,
  },
  bytes8: {
    size: 8,
    type: DATA_TYPE_HEX,
  },
  bytes9: {
    size: 9,
    type: DATA_TYPE_HEX,
  },
  bytes10: {
    size: 10,
    type: DATA_TYPE_HEX,
  },
  bytes11: {
    size: 11,
    type: DATA_TYPE_HEX,
  },
  bytes12: {
    size: 12,
    type: DATA_TYPE_HEX,
  },
  bytes13: {
    size: 13,
    type: DATA_TYPE_HEX,
  },
  bytes14: {
    size: 14,
    type: DATA_TYPE_HEX,
  },
  bytes15: {
    size: 15,
    type: DATA_TYPE_HEX,
  },
  bytes16: {
    size: 16,
    type: DATA_TYPE_HEX,
  },
  bytes17: {
    size: 17,
    type: DATA_TYPE_HEX,
  },
  bytes18: {
    size: 18,
    type: DATA_TYPE_HEX,
  },
  bytes19: {
    size: 19,
    type: DATA_TYPE_HEX,
  },
  bytes20: {
    size: 20,
    type: DATA_TYPE_HEX,
  },
  bytes21: {
    size: 21,
    type: DATA_TYPE_HEX,
  },
  bytes22: {
    size: 22,
    type: DATA_TYPE_HEX,
  },
  bytes23: {
    size: 23,
    type: DATA_TYPE_HEX,
  },
  bytes24: {
    size: 24,
    type: DATA_TYPE_HEX,
  },
  bytes25: {
    size: 25,
    type: DATA_TYPE_HEX,
  },
  bytes26: {
    size: 26,
    type: DATA_TYPE_HEX,
  },
  bytes27: {
    size: 27,
    type: DATA_TYPE_HEX,
  },
  bytes28: {
    size: 28,
    type: DATA_TYPE_HEX,
  },
  bytes29: {
    size: 29,
    type: DATA_TYPE_HEX,
  },
  bytes30: {
    size: 30,
    type: DATA_TYPE_HEX,
  },
  bytes31: {
    size: 31,
    type: DATA_TYPE_HEX,
  },
  bytes32: {
    size: 32,
    type: DATA_TYPE_HEX,
  },

  bool: {
    size: 1,
    type: DATA_TYPE_BOOLEAN,
  },

  uint8: {
    size: 1,
    type: DATA_TYPE_UINT,
  },
  uint16: {
    size: 2,
    type: DATA_TYPE_UINT,
  },
  uint24: {
    size: 3,
    type: DATA_TYPE_UINT,
  },
  uint32: {
    size: 4,
    type: DATA_TYPE_BIGUINT,
  },
  uint40: {
    size: 5,
    type: DATA_TYPE_BIGUINT,
  },
  uint48: {
    size: 6,
    type: DATA_TYPE_BIGUINT,
  },
  uint56: {
    size: 7,
    type: DATA_TYPE_BIGUINT,
  },
  uint64: {
    size: 8,
    type: DATA_TYPE_BIGUINT,
  },
  uint72: {
    size: 9,
    type: DATA_TYPE_BIGUINT,
  },
  uint80: {
    size: 10,
    type: DATA_TYPE_BIGUINT,
  },
  uint88: {
    size: 11,
    type: DATA_TYPE_BIGUINT,
  },
  uint96: {
    size: 12,
    type: DATA_TYPE_BIGUINT,
  },
  uint104: {
    size: 13,
    type: DATA_TYPE_BIGUINT,
  },
  uint112: {
    size: 14,
    type: DATA_TYPE_BIGUINT,
  },
  uint120: {
    size: 15,
    type: DATA_TYPE_BIGUINT,
  },
  uint128: {
    size: 16,
    type: DATA_TYPE_BIGUINT,
  },
  uint136: {
    size: 17,
    type: DATA_TYPE_BIGUINT,
  },
  uint144: {
    size: 18,
    type: DATA_TYPE_BIGUINT,
  },
  uint152: {
    size: 19,
    type: DATA_TYPE_BIGUINT,
  },
  uint160: {
    size: 20,
    type: DATA_TYPE_BIGUINT,
  },
  uint168: {
    size: 21,
    type: DATA_TYPE_BIGUINT,
  },
  uint176: {
    size: 22,
    type: DATA_TYPE_BIGUINT,
  },
  uint184: {
    size: 23,
    type: DATA_TYPE_BIGUINT,
  },
  uint192: {
    size: 24,
    type: DATA_TYPE_BIGUINT,
  },
  uint200: {
    size: 25,
    type: DATA_TYPE_BIGUINT,
  },
  uint208: {
    size: 26,
    type: DATA_TYPE_BIGUINT,
  },
  uint216: {
    size: 27,
    type: DATA_TYPE_BIGUINT,
  },
  uint224: {
    size: 28,
    type: DATA_TYPE_BIGUINT,
  },
  uint232: {
    size: 29,
    type: DATA_TYPE_BIGUINT,
  },
  uint240: {
    size: 30,
    type: DATA_TYPE_BIGUINT,
  },
  uint248: {
    size: 31,
    type: DATA_TYPE_BIGUINT,
  },
  uint256: {
    size: 32,
    type: DATA_TYPE_BIGUINT,
  },


  int8: {
    size: 1,
    type: DATA_TYPE_INT,
  },
  int16: {
    size: 2,
    type: DATA_TYPE_INT,
  },
  int24: {
    size: 3,
    type: DATA_TYPE_INT,
  },
  int32: {
    size: 4,
    type: DATA_TYPE_INT,
  },
  int40: {
    size: 5,
    type: DATA_TYPE_BIGINT,
  },
  int48: {
    size: 6,
    type: DATA_TYPE_BIGINT,
  },
  int56: {
    size: 7,
    type: DATA_TYPE_BIGINT,
  },
  int64: {
    size: 8,
    type: DATA_TYPE_BIGINT,
  },
  int72: {
    size: 9,
    type: DATA_TYPE_BIGINT,
  },
  int80: {
    size: 10,
    type: DATA_TYPE_BIGINT,
  },
  int88: {
    size: 11,
    type: DATA_TYPE_BIGINT,
  },
  int96: {
    size: 12,
    type: DATA_TYPE_BIGINT,
  },
  int104: {
    size: 13,
    type: DATA_TYPE_BIGINT,
  },
  int112: {
    size: 14,
    type: DATA_TYPE_BIGINT,
  },
  int120: {
    size: 15,
    type: DATA_TYPE_BIGINT,
  },
  int128: {
    size: 16,
    type: DATA_TYPE_BIGINT,
  },
  int136: {
    size: 17,
    type: DATA_TYPE_BIGINT,
  },
  int144: {
    size: 18,
    type: DATA_TYPE_BIGINT,
  },
  int152: {
    size: 19,
    type: DATA_TYPE_BIGINT,
  },
  int160: {
    size: 20,
    type: DATA_TYPE_BIGINT,
  },
  int168: {
    size: 21,
    type: DATA_TYPE_BIGINT,
  },
  int176: {
    size: 22,
    type: DATA_TYPE_BIGINT,
  },
  int184: {
    size: 23,
    type: DATA_TYPE_BIGINT,
  },
  int192: {
    size: 24,
    type: DATA_TYPE_BIGINT,
  },
  int200: {
    size: 25,
    type: DATA_TYPE_BIGINT,
  },
  int208: {
    size: 26,
    type: DATA_TYPE_BIGINT,
  },
  int216: {
    size: 27,
    type: DATA_TYPE_BIGINT,
  },
  int224: {
    size: 28,
    type: DATA_TYPE_BIGINT,
  },
  int232: {
    size: 29,
    type: DATA_TYPE_BIGINT,
  },
  int240: {
    size: 30,
    type: DATA_TYPE_BIGINT,
  },
  int248: {
    size: 31,
    type: DATA_TYPE_BIGINT,
  },
  int256: {
    size: 32,
    type: DATA_TYPE_BIGINT,
  },
}
