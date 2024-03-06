import gql from "graphql-tag";

export const todoCategoryTypeDefs = gql`
  type TodoCategory {
    id: ID!
    title: String!
  }

  input TodoCategoryCreateInput {
    title: String!
  }

  input TodoCategoryUpdateInput {
    id: ID!
    title: String
  }

  type Query {
    getCategories: [Todo]
    getCategory(id: ID): Todo
  }
  type Mutation {
    createTodoCategory(input: TodoCategoryCreateInput!): TodoCategory
    updateTodoCategory(input: TodoCategoryUpdateInput!): TodoCategory
    deleteTodoCategory(id: ID!): Todo
  }
`;
