"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = __importDefault(require("assert"));
var maxSum_1 = require("../src/resolvers/maxSum");
var testes = [
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
var gabaritos = [
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
describe("maxSum tests", function () {
    var _loop_1 = function (i) {
        var test_1 = testes[i];
        var expected = gabaritos[i];
        it("Test for input: [" + test_1 + "]", function () {
            var response = (0, maxSum_1.maxSum)(undefined, { list: test_1 });
            assert_1.default.equal(response.sum, expected.sum);
            assert_1.default.equal(response.positions.length, expected.positions.length);
            var j = 0;
            var k = 0;
            while (j < expected.positions.length && k < response.positions.length) {
                var expectedPosition = expected.positions[j];
                var actualPosition = response.positions[k];
                assert_1.default.equal(actualPosition, expectedPosition);
                j++;
                k++;
            }
        });
    };
    for (var i = 0; i < testes.length; i++) {
        _loop_1(i);
    }
});
