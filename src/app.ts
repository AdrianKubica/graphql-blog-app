import { GraphQLServer, PubSub } from 'graphql-yoga'
import { db } from './db'
import { Mutation } from './resolvers/Mutation';
import { Comment } from './resolvers/Comment';
import { Post } from './resolvers/Post';
import { User } from './resolvers/User';
import { Query } from './resolvers/Query';
import { Subscription } from './resolvers/Subscription';

const pubsub = new PubSub()

const server = new GraphQLServer({ 
	typeDefs: './src/schema.graphql', 
	resolvers: {
		Query,
		Mutation,
		User,
		Post,
		Comment,
		Subscription
	},
	context: {
		db,
		pubsub
	}
})

server.start({ port: 4000 }, () => {
    console.log('The server is up')
})