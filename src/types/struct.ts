import {BufferWriter} from './writer';
import {BufferReader} from './reader';

export interface Struct {
  inject(obj: Struct): this;

  clone(): Struct;

  getSize(extra?: any): number;

  write(bw: BufferWriter, extra?: any): BufferWriter;

  read(br: BufferReader, extra?: any): this;

  toString(): string;

  fromString(str: string, extra?: any): this;

  getJSON(): {[name: string]: any};

  fromJSON(json: {[name: string]: any}, extra?: any): this;

  fromOptions(options: Record<string, any>, extra?: any): this;

  from(options: Record<string, any>, extra?: any): this;

  format(): {[name: string]: any};

  encode(extra?: any): Buffer;

  decode(data: Buffer, extra?: any): this;

  toHex(extra?: any): string;

  fromHex(str: string, extra?: any): this;

  toBase64(): string;

  fromBase64(str: string, extra?: any): this;

  toJSON(): {[name: string]: any};

  /*
   * Aliases
   */
  toWriter(bw: BufferWriter, extra?: any): BufferWriter;

  fromReader(br: BufferReader, extra?: any): this;

  toRaw(extra?: any): Buffer;

  fromRaw(data: Buffer, extra?: any): this;
}

export interface StructCtor<T extends Struct> {
  new (...args: any[]): T;

  read(br: BufferReader, extra?: any): T;

  decode(data: Buffer, extra?: any): T;

  fromHex(str: string, extra?: any): T;

  fromBase64(str: string, extra?: any): T;

  fromString(str: string, extra?: any): T;

  fromJSON(json: {[name: string]: any}, extra?: any): T;

  fromOptions(options: Record<string, any>, extra?: any): T;

  from(options: Record<string, any>, extra?: any): T;

  fromReader(br: BufferReader, extra?: any): T;

  fromRaw(data: Buffer, extra?: any): T;
}
