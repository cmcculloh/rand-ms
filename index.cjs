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

const getMS = (min, max, multiplier) => {
	const adjustedMin = Math.ceil((max > 0 ? min : 0) * multiplier);
	const adjustedMax = Math.floor((max > 0 ? max : min) * multiplier);
	const randMS = Math.floor((Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin);

	return randMS > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : randMS;
};

const randomMS = (min = 10, max = 0, interval = 's') => {
	if (typeof min !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof min}`);
	}

	if (typeof max !== 'number') {
		throw new TypeError(`Expected a number, got ${typeof max}`);
	}

	if (typeof interval !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof interval}`);
	}

	const multiplier = getMultiplier(interval);

	return getMS(min, max, multiplier);
};

module.exports = {
	randomMS,
};
