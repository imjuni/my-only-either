# my-only-either

[![Download Status](https://img.shields.io/npm/dw/my-only-either.svg)](https://npmcharts.com/compare/my-only-either?minimal=true) [![Github Star](https://img.shields.io/github/stars/imjuni/my-only-either.svg?style=popout)](https://github.com/imjuni/my-only-either) [![Github Issues](https://img.shields.io/github/issues-raw/imjuni/my-only-either.svg)](https://github.com/imjuni/my-only-either/issues) [![NPM version](https://img.shields.io/npm/v/my-only-either.svg)](https://www.npmjs.com/package/my-only-either) [![License](https://img.shields.io/npm/l/my-only-either.svg)](https://github.com/imjuni/my-only-either/blob/master/LICENSE)

Simple Type and Function set for Either interface. Either important concept in functional programming. But Node.js and TypeScript not support this concept. So you can choose fp-ts or anther functional utility. But if you need only Eihter, this package is good alternative.

# Why? use Either?
Helpful for functional programming and integrate return type. See below.

```ts
import { parse as jsoncParse } from 'jsonc-parser';
import { parse as json5Parse } from 'json5';

function json5Parse(value: string): PassFailEither<Error, Record<any, any>> {
  try {
    return pass(json5Parse(value));
  } catch (err) {
    return fail(new Error(err));
  }
}

function jsoncParse(value: string): PassFailEither<Error, Record<any, any>> {
  try {
    return pass(jsoncParse(value));
  } catch (err) {
    return fail(new Error(err));
  }
}

function parse(value: string): Record<any, any> {
  const jsoncParsedEither = jsoncParse(value);

  if (isPass(jsoncParsedEither)) {
    return jsoncParsedEither.pass;
  }

  const json5ParsedEither = json5Parse(value);

  if (isPass(json5ParsedEither)) {
    return json5ParsedEither.pass;    
  }

  // also you can use "throw new Error(jsoncParsedEither.fail);"
  throw new Error(json5ParsedEither.fail);
}
```

throw keyword move control-flow. But Either, PassFailEither don't move control-flow besides Either helpful functional programming and function pipe.

# Either
Name using left and right.

| name | description |
| :-: | :- |
| ILeft | Left interface |
| IRight | Right interface |
| Either | Either type using ILeft and IRight |
| left | value convert ILeft type |
| right | value convert IRight type |
| isLeft | check given value is ILeft type |
| isRight | check given value is IRight type |

# PassFailEither
Name using pass and fail.

| name | description |
| :-: | :- |
| IFail | Fail interface |
| IPass | Pass interface |
| PassFailEither | PassFailEither type using IFail and IPass |
| fail | value convert IFail type |
| pass | value convert IPass type |
| isFail | check given value is IFail type |
| isPass | check given value is IPass type |

# Generic type in Either, PassFailEither
First generic type is ILeft or IFail. Because fp-ts and many programming language choose first type is left(or fail).

```ts
type Either<TLEFT, TRIGHT> = ILeft<TLEFT> | IRight<TRIGHT>;
```