import { Resolvers } from "../pages/types"

const resolvers: Resolvers = {
  Query: {
    getUser: async (_, { id }, { dataSources }) => {
      let headersList = {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzA5MTIxMDMyLCJleHAiOjE3MTE3MTMwMzJ9.9sH3Kuz-mQxDJNOWlDEtOlN1e5jY4T9VKpcDBpsilA0",
      }

      let response = await fetch(
        `https://strapi.training.brainvire.net/api/basic-details?populate=*&filters[users_permissions_user][id][$eq]=${id}`,
        {
          method: "GET",
          headers: headersList,
        }
      )

      let data = await response.json()
      console.log(data)

      // try {
      //   const res = dataSources.TrackAPI.getUserById(id)
      //   return res.json()
      // } catch (error) {
      //   return error
      // }
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
    SignUp: (_, { Crediantials }) => {
      let { email, password, username }: any = Crediantials
      return {
        jwt: "salma hayak",
        user: {
          email,
          password,
          username,
        },
      }
    },
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
