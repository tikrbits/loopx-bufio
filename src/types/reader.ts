export interface BufferReader {
  check(size: number): void;

  getSize(): number;

  left(): number;

  seek(off: number): this;

  start(): number;

  end(): number;

  endData(zeroCopy?: boolean): Buffer;

  destroy(): this;

  readU8(): number;

  readU16(): number;

  readU16BE(): number;

  readU24(): number;

  readU24BE(): number;

  readU32(): number;

  readU32BE(): number;

  readU40(): number;

  readU40BE(): number;

  readU48(): number;

  readU48BE(): number;

  readU56(): number;

  readU56BE(): number;

  readU64(): number;

  readU64BE(): number;

  readI8(): number;

  readI16(): number;

  readI16BE(): number;

  readI24(): number;

  readI24BE(): number;

  readI32(): number;

  readI32BE(): number;

  readI40(): number;

  readI40BE(): number;

  readI48(): number;

  readI48BE(): number;

  readI56(): number;

  readI56BE(): number;

  readI64(): number;

  readI64BE(): number;

  readFloat(): number;

  readFloatBE(): number;

  readDouble(): number;

  readDoubleBE(): number;

  readVarint(): number;

  readVarint2(): number;

  readBytes(size: number, zeroCopy?: boolean): Buffer;

  readVarBytes(zeroCopy?: boolean): Buffer;

  readChild(size: number): BufferReader;

  readString(size: number, enc?: BufferEncoding | null): string;

  readHash(enc?: BufferEncoding | null): string | Buffer;

  readVarString(enc?: BufferEncoding | null, limit?: number): string;

  readNullString(enc?: BufferEncoding | null): string;

  createChecksum(hash: (data: Buffer) => Buffer): Buffer;

  verifyChecksum(hash: (data: Buffer) => Buffer): boolean;
}

export interface BufferReaderCtor {
  new (data: Buffer, zeroCopy?: boolean): BufferReader;
}
