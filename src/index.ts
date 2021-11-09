import { GraphQLServer } from "graphql-yoga";
import path from "path";
import { logger } from "./configs/logger";
import { Resolvers } from "./resolvers";

const server = new GraphQLServer({
	typeDefs: path.resolve(__dirname, "schema.graphql"),
	resolvers: Resolvers,
});

server.start(() => {
	logger.info("Server running on port 4000.");
});
