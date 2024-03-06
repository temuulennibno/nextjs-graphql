import gql from "graphql-tag";

export const todoTypeDefs = gql`
  type Todo {
    id: ID!
    category: TodoCategory
    title: String!
    completed: Boolean!
  }

  input TodoCreateInput {
    title: String!
    categoryId: ID
    completed: Boolean!
  }

  input TodoUpdateInput {
    id: ID!
    title: String
    categoryId: ID
    completed: Boolean
  }

  type Query {
    getTodoList: [Todo!]!
    getTodo(id: ID): Todo
  }
  type Mutation {
    createTodo(input: TodoCreateInput!): Todo!
    updateTodo(input: TodoUpdateInput!): Todo!
    deleteTodo(id: ID!): Todo
  }
`;
