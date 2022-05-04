export interface ILeft<T> {
  type: 'left';
  left: T;
}

export interface IRight<T> {
  type: 'right';
  right: T;
}

export type Either<TLEFT, IRIGHT> = ILeft<TLEFT> | IRight<IRIGHT>;

export function right<IRIGHT>(value: IRIGHT): IRight<IRIGHT> {
  return {
    type: 'right',
    right: value,
  };
}

export function left<TLEFT>(value: TLEFT): ILeft<TLEFT> {
  return {
    type: 'left',
    left: value,
  };
}

export function isLeft<TLEFT>(value: Either<TLEFT, any>): value is ILeft<TLEFT> {
  if (value.type === 'left') {
    return true;
  }

  return false;
}

export function isRight<IRIGHT>(value: Either<any, IRIGHT>): value is IRight<IRIGHT> {
  if (value.type === 'right') {
    return true;
  }

  return false;
}

export type TPickLeft<T extends Either<any, any>> = [T] extends [Either<infer U, any>] ? U : never;

export type TPickRight<T extends Either<any, any>> = [T] extends [Either<any, infer U>] ? U : never;
