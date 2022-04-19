import test from 'ava';
import randMS from './wrapper.mjs';

test('correct params', t => {
	t.throws(() => {
		randMS('a');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number or string, eg: 1 or "1s", got "a"',
	});

	t.throws(() => {
		randMS(1, 'a');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number or string, eg: 1 or "1s", got "a"',
	});

	t.throws(() => {
		randMS(3, 1);
	}, {
		instanceOf: TypeError,
		message: 'Expected max "1" to be greater than min "3"',
	});
});

test('correct outcomes', t => {
	const rand = randMS();
	t.true(rand < 10_001);

	const randMS0 = randMS('1ms', '1ms');
	t.is(randMS0, 1);

	const randMS1 = randMS('1millisecond', '1milliseconds');
	t.is(randMS1, 1);

	const randS = randMS(1, 1);
	t.is(randS, 1000);

	const randS1 = randMS(1, '1s');
	t.is(randS1, 1000);

	const randS2 = randMS('1second', '1seconds');
	t.is(randS2, 1000);

	const randM = randMS('1m', '1m');
	t.is(randM, 60_000);

	const randM1 = randMS('1minute', '1minutes');
	t.is(randM1, 60_000);

	const randH = randMS('1h', '1h');
	t.is(randH, 3_600_000);

	const randH1 = randMS('1hour', '1hours');
	t.is(randH1, 3_600_000);

	const randD = randMS('1d', '1d');
	t.is(randD, 86_400_000);

	const randD1 = randMS('1day', '1days');
	t.is(randD1, 86_400_000);

	const randW = randMS('1w', '1w');
	t.is(randW, 604_800_000);

	const randW1 = randMS('1week', '1weeks');
	t.is(randW1, 604_800_000);

	const randY = randMS('1y', '1y');
	t.is(randY, 31_557_600_000);

	const randY1 = randMS('1year', '1years');
	t.is(randY1, 31_557_600_000);
});
