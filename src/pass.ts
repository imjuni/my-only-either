export interface IPass<T> {
  type: 'pass';
  pass: T;
}

export interface IFail<T> {
  type: 'fail';
  fail: T;
}

export type PassFailEither<TFAIL, IPASS> = IFail<TFAIL> | IPass<IPASS>;

export function pass<TPASS>(value: TPASS): IPass<TPASS> {
  return {
    type: 'pass',
    pass: value,
  };
}

export function fail<TFAIL>(value: TFAIL): IFail<TFAIL> {
  return {
    type: 'fail',
    fail: value,
  };
}

export function isFail<TFAIL>(value: PassFailEither<TFAIL, any>): value is IFail<TFAIL> {
  if (value.type === 'fail') {
    return true;
  }

  return false;
}

export function isPass<IPASS>(value: PassFailEither<any, IPASS>): value is IPass<IPASS> {
  if (value.type === 'pass') {
    return true;
  }

  return false;
}

export type TPickFail<T extends PassFailEither<any, any>> = [T] extends [
  PassFailEither<infer U, any>,
]
  ? U
  : never;

export type TPickPass<T extends PassFailEither<any, any>> = [T] extends [
  PassFailEither<any, infer U>,
]
  ? U
  : never;
