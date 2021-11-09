import assert from "assert";
import { maxSum } from "../src/resolvers/maxSum";

const testes = [
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

const gabaritos = [
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

describe("maxSum tests", () => {
	for (let i = 0; i < testes.length; i++) {
		const test = testes[i];
		const expected = gabaritos[i];
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
