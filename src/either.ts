export interface ILeft<T> {
  type: 'left';
  left: T;
}

export interface IRight<T> {
  type: 'right';
  right: T;
}

export type Either<TLEFT, IRIGHT> = ILeft<TLEFT> | IRight<IRIGHT>;

export function right<TPASS>(value: TPASS): IRight<TPASS> {
  return {
    type: 'right',
    right: value,
  };
}

export function left<TFAIL>(value: TFAIL): ILeft<TFAIL> {
  return {
    type: 'left',
    left: value,
  };
}

export function isLeft<TFAIL>(value: ILeft<TFAIL>): value is ILeft<TFAIL> {
  if (value.type === 'left') {
    return true;
  }

  return false;
}

export function isRight<IPASS>(value: IRight<IPASS>): value is IRight<IPASS> {
  if (value.type === 'right') {
    return true;
  }

  return false;
}
