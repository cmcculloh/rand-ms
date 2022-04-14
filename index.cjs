"use strict";

const getMultiplier = interval => {
	let multiplier;
	switch (interval) {
		case 'ms':
		case 'milliseconds':
		case 'millisecond':
			multiplier = 1;
			break;
		case 'm':
		case 'minutes':
		case 'minute':
			multiplier = 60_000;
			break;
		case 'h':
		case 'hours':
		case 'hour':
			multiplier = 3_600_000;
			break;
		case 'd':
		case 'days':
		case 'day':
			multiplier = 86_400_000;
			break;
		case 'w':
		case 'weeks':
		case 'week':
			multiplier = 604_800_000;
			break;
		case 'y':
		case 'years':
		case 'year':
			multiplier = 31_557_600_000;
			break;
		case 's':
		case 'seconds':
		case 'second':
		default:
			multiplier = 1000;
	}

	return multiplier;
};

const getMS = (p) => (p[1] * getMultiplier(p[2]));

const getRandomMS = (min, max) => {
	const randMS = Math.floor((Math.random() * (max - min + 1)) + min);

	return randMS > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : randMS;
};

const regex = /([\d_]+)([a-z]*)/;

const randomMS = (minString = "10s", maxString = "0s") => {
	const min = regex.exec('' + minString);
	if (min === null) {
		throw new TypeError(`Expected a number or string, eg: 1 or "1s", got "${minString}"`);
	}
	min[1] = Number(min[1]);

	const max = regex.exec('' + maxString);
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
	randomMS,
};
