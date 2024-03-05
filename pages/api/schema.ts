const gql = require("graphql-tag")

const typeDefs = gql`
  type Query {
    # tracksForHome: [Track!]!
    # tracksForHomeFetch: [Track!]!
    # track(id: ID!): Track
    getUser(id: ID!): User
  }

  type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
  }
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main Author"
    author: Author!
    "The track's illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int

    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    modules: [Module!]!
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture"
    photo: String
  }
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in minutes"
    length: Int
  }

  type User {
    id: ID!
    username: String!
    email: String!
    provider: String!
    confirmed: Boolean!
    blocked: Boolean!
    createdAt: String!
    updatedAt: String!
    firstName: String
    lastName: String
    department: String
  }

  type Employee {
    id: ID
    attributes: EmployeeAttributes!
  }

  type EmployeeAttributes {
    createdAt: String!
    updatedAt: String!
    publishedAt: String!
    dateOfJoining: String!
    phoneNo: String!
    department: String!
    aadharNo: String!
    employeeId: String
    user: User
  }

  type User {
    employees: [Employee!]!
  }

  # type Meta {
  #   pagination: Pagination!
  # }

  # type Pagination {
  #   page: Int!
  #   pageSize: Int!
  #   pageCount: Int!
  #   total: Int!
  # }
`

export default typeDefs
