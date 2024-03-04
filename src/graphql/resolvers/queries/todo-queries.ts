import { getTodoById, getTodoList } from "@/services/todo-service";

export const todoQueries = {
  getTodoList: () => getTodoList(),
  getTodo: (_: unknown, { id }: { id: string }) => getTodoById(id),
};
