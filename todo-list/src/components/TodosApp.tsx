import "./TodosApp.css";

import { type Todo } from "../types/Todo";
import { useCallback, useMemo, useReducer, useRef, useState } from "react";

import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";

type Action =
  | { type: "CREATE"; newItem: Todo }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number };

const todosReducer = (todos: Todo[], action: Action): Todo[] => {
  let result;
  switch (action.type) {
    case "CREATE":
      result = [action.newItem, ...todos];
      break;
    case "UPDATE":
      result = todos.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
      break;
    case "DELETE":
      result = todos.filter((todo) => todo.id !== action.targetId);
      break;
    default:
      result = todos;
  }
  localStorage.setItem("todos", JSON.stringify(result));
  return result;
};

export default function TodosApp() {
  const stored = localStorage.getItem("todos");
  const initTodos: Todo[] = stored ? JSON.parse(stored) : [];

  const initId: number = initTodos.length + 1;
  const idRef = useRef<number>(initId);

  const [todos, dispatch] = useReducer(todosReducer, initTodos);

  const onCreate = useCallback((content: string): void => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    dispatch({ type: "CREATE", newItem });
    idRef.current += 1;
  }, []);

  const onUpdate = useCallback((targetId: number): void => {
    dispatch({ type: "UPDATE", targetId });
  }, []);

  const onDelete = useCallback((targetId: number): void => {
    dispatch({ type: "DELETE", targetId });
  }, []);

  const dispatches = useMemo(
    () => ({ onCreate, onUpdate, onDelete }),
    [onCreate, onUpdate, onDelete],
  );

  return (
    <div className="container">
      <Header />
      <TodoStateContext.Provider value={{ todos }}>
        <TodoDispatchContext.Provider value={dispatches}>
          <TodoEditor />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}
