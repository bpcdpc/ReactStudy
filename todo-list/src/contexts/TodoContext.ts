import { createContext } from "react";
import type { Todo } from "../types/Todo";

interface TodoStateContextType {
  todos: Todo[];
}
export const TodoStateContext = createContext<TodoStateContextType>({
  todos: [],
});

interface TodoDispatchContextType {
  onCreate: (content: string) => void;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}
export const TodoDispatchContext = createContext<TodoDispatchContextType>({
  onCreate: (content: string) => {},
  onUpdate: (targetId: number) => {},
  onDelete: (targetId: number) => {},
});
