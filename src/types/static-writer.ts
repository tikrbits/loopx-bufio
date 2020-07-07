import {BufferWriter} from './writer';

export interface StaticWriter extends BufferWriter {
  check(size: number): void;

  slice(): Buffer;
}

export interface StaticWriterCtor {
  new (dataOrSize?: Buffer | number | null): StaticWriter;

  pool(size: number): StaticWriter;
}
