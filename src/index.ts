import { GraphQLServer } from 'graphql-yoga'
import { typeDefs, resolvers } from './configs/loaderGraphql'

/**
 * GraphQL Handler Function
 * @param {object} event Lambda call event, uncomment when uploading to AWS
 */

const server = new GraphQLServer({
  // context: (): Event => event,
  typeDefs: String(typeDefs),
  resolvers: { ...resolvers },
})

server.start(() => console.log('server is running'))

module.exports = server
