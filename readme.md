# random-ms

> Get pseudo-random millisecond values for timeouts/intervals

## Install

```sh
npm install random-ms
```

## Usage

```js
import randomMS from 'random-ms';

randomMS(); // random ms between 0 & 10 seconds
//=> 6712

randomMS(1); // random ms between 0 & 1 seconds
//=> 992

randomMS(1, 4); // random ms between 1 & 4 seconds
//=> 3493

randomMS(1, 4, 'ms'); // random ms between 1 & 4 ms
//=> 2

randomMS(1, 4, 's'); // random ms between 1 & 4 s
//=> 2351

randomMS(1, 4, 'm'); // random ms between 1 & 4 minutes
//=> 80351

randomMS(1, 4, 'h'); // random ms between 1 & 4 hours
//=> 3640039

randomMS(1, 4, 'd'); // random ms between 1 & 4 days
//=> 86482659

randomMS(1, 4, 'w'); // random ms between 1 & 4 weeks
//=> 604800000

randomMS(1, 4, 'y'); // random ms between 1 & 4 years
//=> 31557600000
```

## API

### randomMS(min|max?, max?, denomination?)

#### min|max

Type: `integer`
Default: `10`

If max is provided, this is the minimum number of seconds you would like represented as milliseconds. If no max is provided, this is assumed to be the maximum, and the minimum is set to 0.

#### max

Type: `integer`
Default: `undefined`

Maximum number of seconds you would like represented as milliseconds. If `undefined` or `null`, will be ignored and first parameter will be used for maximum.

#### interval

Type: `string`\
Default: `seconds`

The time interval value of what you are passing in for min/max. Assumes you are passing in seconds, but you can specify any of:

`ms`, `s`, `m`, `h`, `d`, `w`, `y`, `milliseconds`, `seconds`, `minutes`, `hours`, `days`, `weeks`, `years`
