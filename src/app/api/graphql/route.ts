import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { TodoCreateInput, createTodo, getTodoById, getTodoList } from "@/services/todo-service";

const resolvers = {
  Query: {
    getTodoList: () => getTodoList(),
    getTodo: (_: unknown, { id }: { id: string }) => getTodoById(id),
  },
  Mutation: {
    createTodo: (_: unknown, { input }: { input: TodoCreateInput }) => createTodo(input),
  },
};

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    completed: Boolean!
  }

  input TodoCreateInput {
    title: String!
    completed: Boolean!
  }

  type Query {
    getTodoList: [Todo]
    getTodo(id: ID): Todo
  }
  type Mutation {
    createTodo(input: TodoCreateInput!): Todo
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
