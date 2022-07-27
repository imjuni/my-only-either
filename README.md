# my-only-either

[![Download Status](https://img.shields.io/npm/dw/my-only-either.svg)](https://npmcharts.com/compare/my-only-either?minimal=true) [![Github Star](https://img.shields.io/github/stars/imjuni/my-only-either.svg?style=popout)](https://github.com/imjuni/my-only-either) [![Github Issues](https://img.shields.io/github/issues-raw/imjuni/my-only-either.svg)](https://github.com/imjuni/my-only-either/issues) [![NPM version](https://img.shields.io/npm/v/my-only-either.svg)](https://www.npmjs.com/package/my-only-either) [![License](https://img.shields.io/npm/l/my-only-either.svg)](https://github.com/imjuni/my-only-either/blob/master/LICENSE)

Simple Type and Function set for Either interface. Either important concept in functional programming. But Node.js and TypeScript don't have implmentation. So you can choose another functional implementation like [fp-ts](https://github.com/gcanti/fp-ts) or anther functional utility. But if you need only Eihter, this package is good alternative.

# Why? use Either?

## Zero Dependency
my-only-either not use package. only 1k(1,489byte) size.

## Help functional programming
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

  throw new Error(json5ParsedEither.fail);
}
```

throw keyword move control-flow. But Either, PassFailEither don't move control-flow besides Either helpful functional programming and function pipe.

# Either
Name using left and right.

| name | category | description |
| :- | :-: | :- |
| ILeft | type | Left interface |
| IRight | type | Right interface |
| Either | type | Either type using ILeft and IRight |
| TPickLeft | utility type | Return Type of left in Either |
| TPickILeft | utility type | Return Type of ILeft in Either |
| TPickRight | utility type | Return Type of right in Either |
| TPickIRight | utility type | Return Type of IRight in Either |
| left | function | value convert ILeft type |
| right | function | value convert IRight type |
| isLeft | function | check given value is ILeft type |
| isRight | function | check given value is IRight type |

# PassFailEither
Name using pass and fail.

| name | category | description |
| :-: | :-: | :- |
| IFail | type | Fail interface |
| IPass | type | Pass interface |
| PassFailEither | type | PassFailEither type using IFail and IPass |
| TPickFail | utility type | Return Type of fail in Either |
| TPickIFail | utility type | Return Type of IFail in Either |
| TPickPass | utility type | Return Type of pass in Either |
| TPickIPass | utility type | Return Type of IPass in Either |
| fail | function | value convert IFail type |
| pass | function | value convert IPass type |
| efail | function | value convert IFail type, exactly same fail. If you use jest or test runner this function is helpful for auto import & auto complete |
| epass | function | value convert IPass type, exactly same pass. If you use jest or test runner this function is helpful for auto import & auto complete |
| isFail | function | check given value is IFail type |
| isPass | function | check given value is IPass type |

# Type order in Eiter, PassFailEither
First type arguments is ILeft or IFail. Because fp-ts and many functional programming language choose first type is left(or fail).

```ts
type Either<TLEFT, TRIGHT> = ILeft<TLEFT> | IRight<TRIGHT>;
```