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

randomMS('1ms', 4); // random ms between 1 ms & 4 s
//=> 2

randomMS(1, '4s'); // random ms between 1 & 4 s
//=> 2351

randomMS('1m', '4m'); // random ms between 1 & 4 minutes
//=> 80351

randomMS('1h', '4h'); // random ms between 1 & 4 hours
//=> 3640039

randomMS('1d', '4d'); // random ms between 1 & 4 days
//=> 86482659

randomMS('1w', '4w'); // random ms between 1 & 4 weeks
//=> 604800000

randomMS('1y', '4y'); // random ms between 1 & 4 years
//=> 31557600000
```

## API

### randomMS(min|max?, max?)

#### min|max

Type: `integer|string`
Default: `10`

If max is provided, this is the minimum number of seconds you would like represented as milliseconds. If no max is provided, this is assumed to be the maximum, and the minimum is set to 0.

#### max

Type: `integer|string`
Default: `undefined`

Maximum number of seconds you would like represented as milliseconds. If `undefined` or `null`, will be ignored and first parameter will be used for maximum.

#### string format

The string format for the time interval value of what you are passing in for min/max is a number followed immediately by any of the following:

`ms`, `s`, `m`, `h`, `d`, `w`, `y`, `milliseconds`, `seconds`, `minutes`, `hours`, `days`, `weeks`, `years`

