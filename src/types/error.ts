export interface EncodingError extends Error {}

export interface EncodingErrorCtor {
  new (offset: number, reason: string, start?: Function): EncodingError;
}
