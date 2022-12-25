# Bipack 🥡
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/spb-web/bipack/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/spb-web/bipack/tree/master)
[![GitHub issues](https://img.shields.io/github/issues/spb-web/bipack?color=%234cc61f)](https://github.com/spb-web/boxOverlay/issues)

Use [size-limit](https://github.com/ai/size-limit) to control bundle size.

```
  dist/index.js
  Size limit: 4 kB
  Size:       1.96 kB with all dependencies, minified and gzipped
  
  dist/index.mjs
  Size limit: 4 kB
  Size:       1.12 kB with all dependencies, minified and gzipped
```

## Introduction
![](https://raw.githubusercontent.com/spb-web/bipack/img/hiw.gif)
### Supported field types

- #### Bytes
  Types bytes1, bytes2, bytes3, …, bytes32 hold a sequence of bytes from one to up to 32.
- #### Integers
  int / uint: Signed and unsigned integers of various sizes. Types uint8 to uint256 in steps of 8 (unsigned of 8 up to 256 bits) and int8 to int256.
- #### Booleans
  The possible values are constants `true` and `false`.

## A quick example
So what does code that uses Bipack look like?
```ts
import {Bipack, StructTypes} from 'bipack'

const bipack = new Bipack({
  ethAddress: StructTypes.bytes20,
  txHash: StructTypes.bytes32,
  balance: StructTypes.uint256,
  success: StructTypes.bool,
})

const input = {
  ethAddress: '0x0123456789abcdef3c0e5929fe01464f45ee03f6',
  txHash: '0xc02fd5fc71fe8bdc4fec3f97a019a4dc9961eb95e5251c55fcb3da76f5cb5bca',
  balance: 9223372036854775807n,
  success: true,
}

const packedString: string = bipack.wrapToString(input)

const unpacked = bipack.unwrapFromString(packedString)

console.log(deepEqual(unpacked, input)) // true
```
