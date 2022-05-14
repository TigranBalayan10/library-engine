const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int!
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  input bookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }

  type Auth {
    token: String!
    user: User!
  }

  # removeBook(bookId: String!): User

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: bookInput): User
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
