import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { makeExecutableSchema } from "@graphql-tools/schema"
// import { gql } from "graphql-tag"

import { TrackAPI } from "../../components/track-api"

import { UserAuth } from "../../graphql/DataSources/UserAuth"

import { typeDefs } from "../../graphql/schema" ///schema

import { resolvers } from "../../graphql/resolvers"

export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    const { cache } = server
    return {
      dataSources: {
        trackAPI: new TrackAPI(),
        userAuth: new UserAuth(),
      },
    }
  },
})
