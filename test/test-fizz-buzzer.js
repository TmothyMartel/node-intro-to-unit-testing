const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
	it('should check if a number is divisible by 3 and/or 5 and return the num is not', function() {

		const normalCases = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 10, expected: 'buzz'},
			{num: 9, expected: 'fizz'},
			{num: 8, expected: 8}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should raise an error is arg is not a number', function() {
		const badInputs = [
			['1'],
			['one'],
			[true],
			[false]
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});