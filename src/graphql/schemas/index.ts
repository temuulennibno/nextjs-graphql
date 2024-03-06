import { mergeTypeDefs } from "graphql-tools-merge-typedefs";
import { todoCategoryTypeDefs } from "./todo-category-schema";
import { todoTypeDefs } from "./todo-schema";

export const typeDefs = mergeTypeDefs([todoCategoryTypeDefs, todoTypeDefs]);
