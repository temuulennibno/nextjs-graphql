import { nanoid } from "nanoid";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type TodoCreateInput = {
  title: string;
  completed: boolean;
};

const todoList: Todo[] = [{ id: nanoid(), title: "Learn Next.js", completed: false }];

export const getTodoList = (): Todo[] => {
  return todoList;
};

export const createTodo = (input: TodoCreateInput): Todo => {
  const todo: Todo = { id: nanoid(), ...input };
  todoList.push(todo);
  return todo;
};

export const getTodoById = (id: string): Todo | undefined => {
  return todoList.find((todo) => todo.id === id);
};
