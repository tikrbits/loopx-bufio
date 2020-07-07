export interface Varint {
  size: number;
  value: number;
}

export interface Encoding {
  readU(data: Buffer, off: number, len: number): number;

  readU64(data: Buffer, off: number): number;

  readU56(data: Buffer, off: number): number;

  readU48(data: Buffer, off: number): number;

  readU40(data: Buffer, off: number): number;

  readU32(data: Buffer, off: number): number;

  readU24(data: Buffer, off: number): number;

  readU16(data: Buffer, off: number): number;

  readU8(data: Buffer, off: number): number;

  readUBE(data: Buffer, off: number, len: number): number;

  readU64BE(data: Buffer, off: number): number;

  readU56BE(data: Buffer, off: number): number;

  readU48BE(data: Buffer, off: number): number;

  readU40BE(data: Buffer, off: number): number;

  readU32BE(data: Buffer, off: number): number;

  readU24BE(data: Buffer, off: number): number;

  readU16BE(data: Buffer, off: number): number;

  readI(data: Buffer, off: number, len: number): number;

  readI64(data: Buffer, off: number): number;

  readI56(data: Buffer, off: number): number;

  readI48(data: Buffer, off: number): number;

  readI40(data: Buffer, off: number): number;

  readI32(data: Buffer, off: number): number;

  readI24(data: Buffer, off: number): number;

  readI16(data: Buffer, off: number): number;

  readI8(data: Buffer, off: number): number;

  readIBE(data: Buffer, off: number, len: number): number;

  readI64BE(data: Buffer, off: number): number;

  readI56BE(data: Buffer, off: number): number;

  readI48BE(data: Buffer, off: number): number;

  readI40BE(data: Buffer, off: number): number;

  readI32BE(data: Buffer, off: number): number;

  readI24BE(data: Buffer, off: number): number;

  readI16BE(data: Buffer, off: number): number;

  readFloat(data: Buffer, off: number): number;

  readFloatBE(data: Buffer, off: number): number;

  readDouble(data: Buffer, off: number): number;

  readDoubleBE(data: Buffer, off: number): number;

  writeU(dst: Buffer, num: number, off: number, len: number): number;

  writeU64(dst: Buffer, num: number, off: number): number;

  writeU56(dst: Buffer, num: number, off: number): number;

  writeU48(dst: Buffer, num: number, off: number): number;

  writeU40(dst: Buffer, num: number, off: number): number;

  writeU32(dst: Buffer, num: number, off: number): number;

  writeU24(dst: Buffer, num: number, off: number): number;

  writeU16(dst: Buffer, num: number, off: number): number;

  writeU8(dst: Buffer, num: number, off: number): number;

  writeUBE(dst: Buffer, num: number, off: number, len: number): number;

  writeU64BE(dst: Buffer, num: number, off: number): number;

  writeU56BE(dst: Buffer, num: number, off: number): number;

  writeU48BE(dst: Buffer, num: number, off: number): number;

  writeU40BE(dst: Buffer, num: number, off: number): number;

  writeU32BE(dst: Buffer, num: number, off: number): number;

  writeU24BE(dst: Buffer, num: number, off: number): number;

  writeU16BE(dst: Buffer, num: number, off: number): number;

  writeI(dst: Buffer, num: number, off: number, len: number): number;

  writeI64(dst: Buffer, num: number, off: number): number;

  writeI56(dst: Buffer, num: number, off: number): number;

  writeI48(dst: Buffer, num: number, off: number): number;

  writeI40(dst: Buffer, num: number, off: number): number;

  writeI32(dst: Buffer, num: number, off: number): number;

  writeI24(dst: Buffer, num: number, off: number): number;

  writeI16(dst: Buffer, num: number, off: number): number;

  writeI8(dst: Buffer, num: number, off: number): number;

  writeIBE(dst: Buffer, num: number, off: number, len: number): number;

  writeI64BE(dst: Buffer, num: number, off: number): number;

  writeI56BE(dst: Buffer, num: number, off: number): number;

  writeI48BE(dst: Buffer, num: number, off: number): number;

  writeI40BE(dst: Buffer, num: number, off: number): number;

  writeI32BE(dst: Buffer, num: number, off: number): number;

  writeI24BE(dst: Buffer, num: number, off: number): number;

  writeI16BE(dst: Buffer, num: number, off: number): number;

  writeFloat(dst: Buffer, num: number, off: number): number;

  writeFloatBE(dst: Buffer, num: number, off: number): number;

  writeDouble(dst: Buffer, num: number, off: number): number;

  writeDoubleBE(dst: Buffer, num: number, off: number): number;

  readVarint(data: Buffer, off: number): Varint;

  writeVarint(dst: Buffer, num: number, off: number): number;

  sizeVarint(num: number): number;

  readVarint2(data: Buffer, off: number): Varint;

  writeVarint2(dst: Buffer, num: number, off: number): number;

  sizeVarint2(num: number): number;

  sliceBytes(data: Buffer, off: number, size: number): Buffer;

  readBytes(data: Buffer, off: number, size: number): Buffer;

  writeBytes(dst: Buffer, value: Buffer, off: number): number;

  readString(
    data: Buffer,
    off: number,
    size: number,
    enc?: BufferEncoding | null,
  ): string;

  writeString(
    dst: Buffer,
    str: string,
    off: number,
    enc?: BufferEncoding | null,
  ): number;

  realloc(data: Buffer, size: number): Buffer;

  copy(data: Buffer): Buffer;

  concat(a: Buffer, b: Buffer): Buffer;

  sizeVarBytes(data: Buffer): number;

  sizeVarlen(len: number): number;

  sizeVarString(str: string, enc?: BufferEncoding | null): number;
}
