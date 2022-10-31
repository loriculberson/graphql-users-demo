
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const app = express()
// const { typeDefs, resolvers } = require('./schema')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app })
  app.listen(3001, () => console.log('Server running on port 3001'))
}

startApolloServer()