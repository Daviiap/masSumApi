import { maxSum } from "./maxSum";

export const Resolvers = {
	Mutation: {
		maxSum,
	},
	Query: {
		test: (): string => {
			return "Running";
		},
	},
};
