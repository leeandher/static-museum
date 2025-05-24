const { GraphQLServer } = require('graphql-yoga')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const db = require('./db')

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    // Access Database via resolvers
    context: req => ({ ...req, db })
  })
}

module.exports = createServer
