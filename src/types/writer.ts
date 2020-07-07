export interface BufferWriter {
  render(): Buffer;

  getSize(): number;

  seek(off: number): this;

  destroy(): this;

  writeU8(value: number): this;

  writeU16(value: number): this;

  writeU16BE(value: number): this;

  writeU24(value: number): this;

  writeU24BE(value: number): this;

  writeU32(value: number): this;

  writeU32BE(value: number): this;

  writeU40(value: number): this;

  writeU40BE(value: number): this;

  writeU48(value: number): this;

  writeU48BE(value: number): this;

  writeU56(value: number): this;

  writeU56BE(value: number): this;

  writeU64(value: number): this;

  writeU64BE(value: number): this;

  writeI8(value: number): this;

  writeI16(value: number): this;

  writeI16BE(value: number): this;

  writeI24(value: number): this;

  writeI24BE(value: number): this;

  writeI32(value: number): this;

  writeI32BE(value: number): this;

  writeI40(value: number): this;

  writeI40BE(value: number): this;

  writeI48(value: number): this;

  writeI48BE(value: number): this;

  writeI56(value: number): this;

  writeI56BE(value: number): this;

  writeI64(value: number): this;

  writeI64BE(value: number): this;

  writeFloat(value: number): this;

  writeFloatBE(value: number): this;

  writeDouble(value: number): this;

  writeDoubleBE(value: number): this;

  writeVarint(value: number): this;

  writeVarint2(value: number): this;

  writeBytes(value: Buffer): this;

  writeVarBytes(value: Buffer): this;

  copy(value: Buffer, start: number, end: number): this;

  writeString(value: string, enc?: BufferEncoding | null): this;

  writeHash(value: string | Buffer): this;

  writeVarString(value: string, enc?: BufferEncoding | null): this;

  writeNullString(value: string, enc?: BufferEncoding | null): this;

  writeChecksum(hash: (data: Buffer) => Buffer): this;

  fill(value: number, size: number): this;
}

export interface BufferWriterCtor {
  new (): BufferWriter;
}
