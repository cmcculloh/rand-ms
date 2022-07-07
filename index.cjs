"use strict";// eslint-disable-line quotes

const getMultiplier = (interval) => {// eslint-disable-line complexity
	switch (interval) {
		case 'ms':
		case 'milliseconds':
		case 'millisecond':
			return 1;
		case 'm':
		case 'minutes':
		case 'minute':
			return 60_000;
		case 'h':
		case 'hours':
		case 'hour':
			return 3_600_000;
		case 'd':
		case 'days':
		case 'day':
			return 86_400_000;
		case 'w':
		case 'weeks':
		case 'week':
			return 604_800_000;
		case 'M':
		case 'months':
		case 'month':
		case 'Months':
		case 'Month':
			return 2_592_000_000;
		case 'y':
		case 'years':
		case 'year':
			return 31_557_600_000;
		case 's':
		case 'seconds':
		case 'second':
		default:
			return 1000;
	}
};

const getMS = (p) => (p[1] * getMultiplier(p[2]));

const getRandomMS = (min, max) => {
	const randMS = Math.floor((Math.random() * (max - min + 1)) + min);

	return randMS > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : randMS;
};

const regex = /([\d_]+)([a-zA-Z]*)/;

const getInputNumber = (numberString) => {
	const number = regex.exec(String(numberString));
	if (number === null) {
		throw new TypeError(`Expected a number or string, eg: 1 or "1s", got "${numberString}"`);
	}

	number[1] = Number(number[1]);

	return number;
};

const checkMinMax = (min, max) => {
	if (max[1] !== 0 && max[1] < min[1]) {
		throw new TypeError(`Expected max "${max[1]}" to be greater than min "${min[1]}"`);
	}
};

const getMinMS = (min, max) => Math.ceil(getMS(max[1] > 0 ? min : max));
const getMaxMS = (min, max) => Math.floor(getMS(max[1] > 0 ? max : min));

const randMS = (minString = '10s', maxString = '0s') => {
	const min = getInputNumber(minString);
	const max = getInputNumber(maxString);

	checkMinMax(min, max);

	const minMS = getMinMS(min, max);
	const maxMS = getMaxMS(min, max);

	return getRandomMS(minMS, maxMS);
};

module.exports = {
	randMS,
};
