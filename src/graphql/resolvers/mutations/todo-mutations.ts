import { TodoCreateInput, TodoUpdateInput, createTodo, deleteTodo, updateTodo } from "@/services/todo-service";

export const todoMutations = {
  createTodo: (_: unknown, { input }: { input: TodoCreateInput }) => createTodo(input),
  updateTodo: (_: unknown, { input }: { input: TodoUpdateInput }) => updateTodo(input),
  deleteTodo: (_: unknown, { id }: { id: string }) => deleteTodo(id),
};
