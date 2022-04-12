import test from 'ava';
import randomMS from './index.js';

test('randomMS', t => {
	t.throws(() => {
		randomMS('1');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number, got string',
	});

	t.throws(() => {
		randomMS(1, '3');
	}, {
		instanceOf: TypeError,
		message: 'Expected a number, got string',
	});

	t.throws(() => {
		randomMS(1, 3, 2);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number',
	});

	const rand = randomMS();
	t.true(rand < 10_001);

	const randS = randomMS(1, 1);
	t.true(randS === 1000);

	const randS1 = randomMS(1, 1, 's');
	t.true(randS1 === 1000);

	const randS2 = randomMS(1, 1, 'seconds');
	t.true(randS2 === 1000);

	const randM = randomMS(1, 1, 'm');
	t.true(randM === 60_000);

	const randM1 = randomMS(1, 1, 'minutes');
	t.true(randM1 === 60_000);

	const randH = randomMS(1, 1, 'h');
	t.true(randH === 3_600_000);

	const randH1 = randomMS(1, 1, 'hours');
	t.true(randH1 === 3_600_000);

	const randD = randomMS(1, 1, 'd');
	t.true(randD === 86_400_000);

	const randD1 = randomMS(1, 1, 'days');
	t.true(randD1 === 86_400_000);

	const randW = randomMS(1, 1, 'w');
	t.true(randW === 604_800_000);

	const randW1 = randomMS(1, 1, 'weeks');
	t.true(randW1 === 604_800_000);

	const randY = randomMS(1, 1, 'y');
	t.true(randY === 31_557_600_000);

	const randY1 = randomMS(1, 1, 'years');
	t.true(randY1 === 31_557_600_000);
});
