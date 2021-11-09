import assert from "assert";
import {
	maxSum,
	getMaxSumFromNonPositiveList,
	getMaxSumFromPositiveList,
	getPossibleStartIndices,
} from "../src/resolvers/maxSum";

describe("getPossibleStartIndices tests", () => {
	const tests = [
		[-1000, -1, -1, -1, -1000],
		[1, 2, 3, 4, -1000],
		[-1000, 1, 2, 3, 4],
		[-1000, 2, -1, 2, -1000],
		[-1000, -2, -1, -2, -1000, -1, -190, -10, -14],
		[-1000, 0, 0, 0, -2, -1, -1, -1, -1, 5, -1],
		[2, 9, -1, 4, -6, 12, -10, 100, -1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1],
	];

	const responses = [[], [0], [1], [1, 3], [], [9], [0, 3, 5, 7], [], [8]];

	for (let i = 0; i < tests.length; i++) {
		const test = tests[i];
		const expected = responses[i];
		it(`Test for input: [${test}]`, () => {
			const response = getPossibleStartIndices(test);

			assert.equal(response.toString(), expected.toString());
		});
	}
});

describe("getMaxSumFromNonPositiveList tests", () => {
	const tests = [
		[-1000, -1, -1, -1, -1000],
		[-1000, -2, -1, -2, -1000, -1, -190, -10, -14],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	];

	const responses = [
		{ sum: -1, positions: [2] },
		{ sum: -1, positions: [3] },
		{ sum: 0, positions: [1] },
	];

	for (let i = 0; i < tests.length; i++) {
		const test = tests[i];
		const expected = responses[i];
		it(`Test for input: [${test}]`, () => {
			const response = getMaxSumFromNonPositiveList(test);

			assert.equal(response.sum, expected.sum);
			assert.equal(response.positions.length, expected.positions.length);

			let j = 0;
			let k = 0;

			while (j < expected.positions.length && k < response.positions.length) {
				const expectedPosition = expected.positions[j];
				const actualPosition = response.positions[k];

				assert.equal(actualPosition, expectedPosition);

				j++;
				k++;
			}
		});
	}
});

describe("getMaxSumFromPositiveList tests", () => {
	const tests = [
		[1, 2, 3, 4, -1000],
		[-1000, 1, 2, 3, 4],
		[-1000, 2, -1, 2, -1000],
		[-1000, 0, 0, 0, -2, -1, -1, -1, -1, 5, -1],
		[2, 9, -1, 4, -6, 12, -10, 100, -1],
		[0, 0, 0, 0, 0, 0, 0, 0, 1],
	];

	const responses = [
		{ sum: 10, positions: [1, 2, 3, 4] },
		{ sum: 10, positions: [2, 3, 4, 5] },
		{ sum: 3, positions: [2, 3, 4] },
		{ sum: 5, positions: [10] },
		{ sum: 110, positions: [1, 2, 3, 4, 5, 6, 7, 8] },
		{ sum: 1, positions: [9] },
	];

	for (let i = 0; i < tests.length; i++) {
		const test = tests[i];
		const expected = responses[i];
		it(`Test for input: [${test}]`, () => {
			const response = getMaxSumFromPositiveList(
				test,
				getPossibleStartIndices(test)
			);

			assert.equal(response.sum, expected.sum);
			assert.equal(response.positions.length, expected.positions.length);

			let j = 0;
			let k = 0;

			while (j < expected.positions.length && k < response.positions.length) {
				const expectedPosition = expected.positions[j];
				const actualPosition = response.positions[k];

				assert.equal(actualPosition, expectedPosition);

				j++;
				k++;
			}
		});
	}
});

describe("maxSum tests", () => {
	const tests = [
		[-1000, -1, -1, -1, -1000],
		[1, 2, 3, 4, -1000],
		[-1000, 1, 2, 3, 4],
		[-1000, 2, -1, 2, -1000],
		[-1000, -2, -1, -2, -1000, -1, -190, -10, -14],
		[-1000, 0, 0, 0, -2, -1, -1, -1, -1, 5, -1],
		[2, 9, -1, 4, -6, 12, -10, 100, -1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 1],
	];

	const responses = [
		{ sum: -1, positions: [2] },
		{ sum: 10, positions: [1, 2, 3, 4] },
		{ sum: 10, positions: [2, 3, 4, 5] },
		{ sum: 3, positions: [2, 3, 4] },
		{ sum: -1, positions: [3] },
		{ sum: 5, positions: [10] },
		{ sum: 110, positions: [1, 2, 3, 4, 5, 6, 7, 8] },
		{ sum: 0, positions: [1] },
		{ sum: 1, positions: [9] },
	];

	for (let i = 0; i < tests.length; i++) {
		const test = tests[i];
		const expected = responses[i];
		it(`Test for input: [${test}]`, () => {
			const response = maxSum(undefined, { list: test });

			assert.equal(response.sum, expected.sum);
			assert.equal(response.positions.length, expected.positions.length);

			let j = 0;
			let k = 0;

			while (j < expected.positions.length && k < response.positions.length) {
				const expectedPosition = expected.positions[j];
				const actualPosition = response.positions[k];

				assert.equal(actualPosition, expectedPosition);

				j++;
				k++;
			}
		});
	}
});
