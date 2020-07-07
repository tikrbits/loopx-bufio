import {Encoding, Varint} from './encoding';
import {EncodingErrorCtor} from './error';
import {BufferReader, BufferReaderCtor} from './reader';
import {BufferWriter, BufferWriterCtor} from './writer';
import {StaticWriter, StaticWriterCtor} from './static-writer';
import {Struct, StructCtor} from './struct';

type ReadFn = (data: Buffer, off: number) => number;
type ReadnFn = (data: Buffer, off: number, len: number) => number;
type WriteFn = (data: Buffer, num: number, off: number) => number;
type WritenFn = (data: Buffer, num: number, off: number, len: number) => number;
type ReadvarFn = (data: Buffer, off: number) => Varint;
type WritecbFn = (data: Buffer, num: number, off: number) => number;

export interface Bufio {
  encoding: Encoding;
  EncodingError: EncodingErrorCtor;
  BufferReader: BufferReaderCtor;
  BufferWriter: BufferWriterCtor;
  StaticWriter: StaticWriterCtor;
  Struct: StructCtor<Struct>;

  read(data: Buffer, zeroCopy?: boolean): BufferReader;

  write(size?: number | null): BufferWriter | StaticWriter;

  pool(size: number): StaticWriter;

  readU: ReadnFn;
  readU64: ReadFn;
  readU56: ReadFn;
  readU48: ReadFn;
  readU40: ReadFn;
  readU32: ReadFn;
  readU24: ReadFn;
  readU16: ReadFn;
  readU8: ReadFn;

  readUBE: ReadnFn;
  readU64BE: ReadFn;
  readU56BE: ReadFn;
  readU48BE: ReadFn;
  readU40BE: ReadFn;
  readU32BE: ReadFn;
  readU24BE: ReadFn;
  readU16BE: ReadFn;

  readI: ReadnFn;
  readI64: ReadFn;
  readI56: ReadFn;
  readI48: ReadFn;
  readI40: ReadFn;
  readI32: ReadFn;
  readI24: ReadFn;
  readI16: ReadFn;
  readI8: ReadFn;

  readIBE: ReadnFn;
  readI64BE: ReadFn;
  readI56BE: ReadFn;
  readI48BE: ReadFn;
  readI40BE: ReadFn;
  readI32BE: ReadFn;
  readI24BE: ReadFn;
  readI16BE: ReadFn;

  readFloat: ReadFn;
  readFloatBE: ReadFn;
  readDouble: ReadFn;
  readDoubleBE: ReadFn;

  writeU: WritenFn;
  writeU64: WriteFn;
  writeU56: WriteFn;
  writeU48: WriteFn;
  writeU40: WriteFn;
  writeU32: WriteFn;
  writeU24: WriteFn;
  writeU16: WriteFn;
  writeU8: WriteFn;

  writeUBE: WritenFn;
  writeU64BE: WriteFn;
  writeU56BE: WriteFn;
  writeU48BE: WriteFn;
  writeU40BE: WriteFn;
  writeU32BE: WriteFn;
  writeU24BE: WriteFn;
  writeU16BE: WriteFn;

  writeI: WritenFn;
  writeI64: WriteFn;
  writeI56: WriteFn;
  writeI48: WriteFn;
  writeI40: WriteFn;
  writeI32: WriteFn;
  writeI24: WriteFn;
  writeI16: WriteFn;
  writeI8: WriteFn;

  writeIBE: WritenFn;
  writeI64BE: WriteFn;
  writeI56BE: WriteFn;
  writeI48BE: WriteFn;
  writeI40BE: WriteFn;
  writeI32BE: WriteFn;
  writeI24BE: WriteFn;
  writeI16BE: WriteFn;

  writeFloat: WriteFn;
  writeFloatBE: WriteFn;
  writeDouble: WriteFn;
  writeDoubleBE: WriteFn;

  readVarint: ReadvarFn;
  writeVarint: WritecbFn;
  sizeVarint: (num: number) => number;
  readVarint2: ReadvarFn;
  writeVarint2: WritecbFn;
  sizeVarint2: (num: number) => number;

  sliceBytes: (data: Buffer, off: number, size: number) => Buffer;
  readBytes: (data: Buffer, off: number, size: number) => Buffer;
  writeBytes: (dst: Buffer, value: Buffer, off: number) => number;
  readString: (
    data: Buffer,
    off: number,
    size: number,
    enc?: BufferEncoding | null,
  ) => string;
  writeString: (
    dst: Buffer,
    str: string,
    off: number,
    enc?: BufferEncoding | null,
  ) => number;

  realloc: (data: Buffer, size: number) => Buffer;
  copy: (data: Buffer) => Buffer;
  concat: (a: Buffer, b: Buffer) => Buffer;

  sizeVarBytes: (data: Buffer) => number;
  sizeVarlen: (len: number) => number;
  sizeVarString: (str: string, enc?: BufferEncoding | null) => number;
}
