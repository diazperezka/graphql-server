import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

import _resolvers from './resolvers'
import _typeDefs from './typeDefs'

export const resolvers = mergeResolvers(_resolvers)
export const typeDefs = mergeTypes(_typeDefs, {
  all: true
})