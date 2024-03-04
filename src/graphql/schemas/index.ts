import gql from "graphql-tag";

export const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  input TodoCreateInput {
    title: String!
    completed: Boolean!
  }

  input TodoUpdateInput {
    id: ID!
    title: String
    completed: Boolean
  }

  type Query {
    getTodoList: [Todo]
    getTodo(id: ID): Todo
  }
  type Mutation {
    createTodo(input: TodoCreateInput!): Todo
    updateTodo(input: TodoUpdateInput!): Todo
    deleteTodo(id: ID!): Todo
  }
`;
