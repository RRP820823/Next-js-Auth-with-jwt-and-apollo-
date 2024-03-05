// import { ApolloServer } from "@apollo/server"
// import { startServerAndCreateNextHandler } from "@as-integrations/next"
// import gql from "graphql-tag"

// let Users = [
//   {
//     id: "1",
//     name: "rrp",
//   },
//   {
//     id: "12",
//     name: "Salma hayak",
//   },
//   {
//     id: "5",
//     name: "Brad Pitt",
//   },
//   {
//     id: "35",
//     name: "Jennifer Lopez",
//   },
// ]

// console.log("Users", Users)

// const typeDefs = gql`
//   type User {
//     id: String
//     name: String
//   }

//   type Query {
//     hello: String
//     getuser(id: ID): User
//     getUsers: [User]
//   }

//   type Mutation {
//     updateUser(id: ID, newName: String): User
//     adduser(id: ID, newName: String): User
//   }
// `

// const resolvers = {
//   Mutation: {
//     updateUser: (_: any, { id, newName }: any) => {
//       const userIndex = Users.findIndex((u) => u.id === id)
//       if (userIndex !== -1) {
//         Users[userIndex].name = newName
//         return Users[userIndex]
//       }
//       return null
//     },

//     adduser: (_: any, { id, newName }: any) => {
//       Users.push({ id: id, name: newName })
//     },
//   },
//   Query: {
//     hello: () => "world",
//     getuser: (_: any, { id }: any) => {
//       const user = Users.find((u) => u.id === id)
//       return user
//     },
//     getUsers: () => Users,
//   },
// }

// const server = new ApolloServer({
//   resolvers,
//   typeDefs,
// })

// export default startServerAndCreateNextHandler(server)

import { ApolloServer } from "@apollo/server"
import { startServerAndCreateNextHandler } from "@as-integrations/next"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { gql } from "graphql-tag"
import { resolvers } from "../../components/resolvers"
import { TrackAPI } from "../../components/track-api"
import typeDefs from "./schema"
// import { RESTDataSource } from "@apollo/datasource-rest"
// const typeDefs = gql`
//   type Query {
//     users: [User!]!
//     user(username: String): User
//     # tracksForHome: [Track!]!
//   }

//   # type track {
//   #   id: ID!
//   #   title: String!
//   #   author: Author!
//   #   thumbnail: String
//   #   length: Int
//   #   modulesCount: Int
//   # }

//   # type Author {

//   #   id: ID!

//   #   name: String!

//   #   photo: String

//   # }
//   type User {
//     name: String
//     username: String
//   }

//   input NewUserInput {
//     name: String
//     username: String
//   }

//   type Mutation {
//     changeUserName(username: String): User
//     addUser(newuser: NewUserInput): User
//   }
// `

// const users = [
//   { name: "Leeroy Jenkins", username: "leeroy" },
//   { name: "Foo Bar", username: "foobar" },
// ]

// const resolvers = {
//   Mutation: {
//     changeUserName(parent, { username }) {
//       let user = users.find((user) => user.username === username)

//       if (user) {
//         user.username = "salma hyak"
//         return user
//       }
//     },

//     addUser(parent, { newuser }: any) {
//       if (newuser) {
//         users.push(newuser)
//         return newuser
//       }
//     },
//   },
//   Query: {
//     users() {
//       return users
//     },
//     user(parent, { username }) {
//       return users.find((user) => user.username === username)
//     },
//   },
// }

export const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

export default startServerAndCreateNextHandler(
  server,

  {
    context: async () => {
      const { cache } = server
      return {
        dataSources: {
          trackAPI: new TrackAPI(),
        },
      }
    },
  }
)
