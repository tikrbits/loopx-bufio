# @loopx/bufio

> Buffer and serialization utilities for javascript.
>
> This project is TypeScript version from
> [bufio](https://github.com/bcoin-org/bufio)

## Usage

```js
import assert = require('assert');
import bio = require('@loopx/bufio');

const bw = bio.write();
bw.writeU64(100);
bw.writeString('foo');
const data = bw.render();

const br = bio.read(data);
assert(br.readU64() === 100);
assert(br.readString(3) === 'foo');
```

## Struct Usage

```js
import bio = require('@loopx/bufio');

class MyStruct extends bio.Struct {
  constructor() {
    super();
    this.str = 'hello';
    this.value = 0;
  }

  write(bw) {
    bw.writeVarString(this.str, 'ascii');
    bw.writeU64(this.value);
    return this;
  }

  read(br) {
    this.str = br.readVarString('ascii');
    this.value = br.readU64();
    return this;
  }
}

const obj = new MyStruct();

console.log('Buffer:');
console.log(obj.encode());

console.log('Decoded:');
console.log(MyStruct.decode(obj.encode()));

console.log('Hex:');
console.log(obj.toHex());

console.log('Decoded:');
console.log(MyStruct.fromHex(obj.toHex()));

console.log('Base64:');
console.log(obj.toBase64());
```

## License

- Copyright (c) 2020, Yuan Tao (MIT License).
- Copyright (c) 2017, Christopher Jeffrey (MIT License).
