import { Resolvers } from "../pages/types"

const fetch = require("node-fetch")
const resolvers: Resolvers = {
  Query: {
    getUser: async (_, { id }, { dataSources }) => {
      try {
        const user = await dataSources.trackAPI.getUserBuID(id)
        return user
      } catch (error) {
        return error
      }
    },

    // // returns an array of Tracks that will be used to populate the homepage grid of our web client
    // tracksForHome: (_, __, { dataSources }) => {
    //   return dataSources.trackAPI.getTracksForHome()
    // },
    // // get a single track by ID, for the track page
    // track: (_, { id }, { dataSources }) => {
    //   return dataSources.trackAPI.getTrack(id)
    // },
    // // returns the same data as tracksForHome, but uses node-fetch instead of RESTDataSource
    // tracksForHomeFetch: async () => {
    //   const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com"
    //   const res = await fetch(`${baseUrl}/tracks`)
    //   return res.json()
    // },
  },

  Mutation: {
    // increments a track's numberOfViews property
    // incrementTrackViews: async (_, { id }, { dataSources }) => {
    //   try {
    //     const track = await dataSources.trackAPI.incrementTrackViews(id)
    //     return {
    //       code: 200,
    //       success: true,
    //       message: `Successfully incremented number of views for track ${id}`,
    //       track,
    //     }
    //   } catch (err) {
    //     return {
    //       code: err.extensions.response.status,
    //       success: false,
    //       message: err.extensions.response.body,
    //       track: null,
    //     }
    //   }
    // },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId)
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id)
    },
  },
}

export { resolvers }
