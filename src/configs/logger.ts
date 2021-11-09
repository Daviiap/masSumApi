import pino from "pino";

export const logger = pino({
	name: "pino",
	transport: {
		target: "pino-pretty",
		options: {
			colorize: true,
		},
	},
});
