import { Todo, TodoCreateInput, TodoUpdateInput } from "@/graphql/generated/graphql";
import { GraphQLError } from "graphql";
import { nanoid } from "nanoid";

const todoList: Todo[] = [{ id: nanoid(), title: "Learn Next.js", completed: false }];

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getTodoList = async (): Promise<Todo[]> => {
  return todoList;
};

export const createTodo = (input: TodoCreateInput): Todo => {
  const todo: Todo = { id: nanoid(), ...input };
  todoList.push(todo);
  return todo;
};

export const updateTodo = (input: TodoUpdateInput): Todo | undefined => {
  const todo = todoList.find((todo) => todo.id === input.id);
  if (!todo) throw new GraphQLError("Todo not found");
  todo.title = `${input.title}`;
  todo.completed = Boolean(input.completed);
  return todo;
};

export const deleteTodo = (id: string): Todo | undefined => {
  const index = todoList.findIndex((todo) => todo.id === id);
  if (index === -1) throw new GraphQLError("Todo not found");
  return todoList.splice(index, 1)[0];
};

export const getTodoById = (id: string): Todo | undefined => {
  return todoList.find((todo) => todo.id === id);
};
