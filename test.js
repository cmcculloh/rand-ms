import test from 'ava';
import randomMS from './wrapper.mjs';

test('correct params', t => {
	t.throws(() => {
		randomMS('a');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number or string, eg: 1 or "1s", got "a"',
	});

	t.throws(() => {
		randomMS(1, 'a');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number or string, eg: 1 or "1s", got "a"',
	});

	t.throws(() => {
		randomMS(3, 1);
	}, {
		instanceOf: TypeError,
		message: 'Expected max "1" to be greater than min "3"',
	});
});

test('correct outcomes', t => {
	const rand = randomMS();
	t.true(rand < 10_001);

	const randMS = randomMS('1ms', '1ms');
	t.is(randMS, 1);

	const randMS1 = randomMS('1millisecond', '1milliseconds');
	t.is(randMS1, 1);

	const randS = randomMS(1, 1);
	t.is(randS, 1000);

	const randS1 = randomMS(1, '1s');
	t.is(randS1, 1000);

	const randS2 = randomMS('1second', '1seconds');
	t.is(randS2, 1000);

	const randM = randomMS('1m', '1m');
	t.is(randM, 60_000);

	const randM1 = randomMS('1minute', '1minutes');
	t.is(randM1, 60_000);

	const randH = randomMS('1h', '1h');
	t.is(randH, 3_600_000);

	const randH1 = randomMS('1hour', '1hours');
	t.is(randH1, 3_600_000);

	const randD = randomMS('1d', '1d');
	t.is(randD, 86_400_000);

	const randD1 = randomMS('1day', '1days');
	t.is(randD1, 86_400_000);

	const randW = randomMS('1w', '1w');
	t.is(randW, 604_800_000);

	const randW1 = randomMS('1week', '1weeks');
	t.is(randW1, 604_800_000);

	const randY = randomMS('1y', '1y');
	t.is(randY, 31_557_600_000);

	const randY1 = randomMS('1year', '1years');
	t.is(randY1, 31_557_600_000);
});
