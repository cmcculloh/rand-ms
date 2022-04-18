"use strict";

const getMultiplier = interval => {
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

const getMS = p => (p[1] * getMultiplier(p[2]));

const getRandomMS = (min, max) => {
	const randMS = Math.floor((Math.random() * (max - min + 1)) + min);

	return randMS > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : randMS;
};

const regex = /([\d_]+)([a-z]*)/;

const randMS = (minString = '10s', maxString = '0s') => {
	const min = regex.exec(String(minString));
	if (min === null) {
		throw new TypeError(`Expected a number or string, eg: 1 or "1s", got "${minString}"`);
	}

	min[1] = Number(min[1]);

	const max = regex.exec(String(maxString));
	if (max === null) {
		throw new TypeError(`Expected a number or string, eg: 1 or "1s", got "${maxString}"`);
	}

	max[1] = Number(max[1]);
	if (max[1] !== 0 && max[1] < min[1]) {
		throw new TypeError(`Expected max "${maxString}" to be greater than min "${minString}"`);
	}

	const minMS = Math.ceil(getMS(max[1] > 0 ? min : max));
	const maxMS = Math.floor(getMS(max[1] > 0 ? max : min));

	return getRandomMS(minMS, maxMS);
};

module.exports = {
	randMS,
};
