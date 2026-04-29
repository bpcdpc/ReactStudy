import "./TodosApp.css";

import { type Todo } from "../types/Todo";
import { useReducer, useRef, useState } from "react";

import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

// const mockTodos: Todo[] = [
//   {
//     id: 0,
//     isDone: false,
//     content: "TypeScript Study",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 1,
//     isDone: true,
//     content: "Python Study",
//     createDate: new Date().getTime(),
//   },
//   {
//     id: 2,
//     isDone: false,
//     content: "Machine Learning Study",
//     createDate: new Date().getTime(),
//   },
// ];

type Action =
  | { type: "CREATE"; newItem: Todo }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number };

const todosReducer = (todos: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "CREATE":
      return [action.newItem, ...todos];
    case "UPDATE":
      return todos.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE":
      return todos.filter((todo) => todo.id !== action.targetId);
    default:
      return todos;
  }
};

export default function TodosApp() {
  // const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const [todos, dispatch] = useReducer(todosReducer, []);
  const idRef = useRef<number>(3);

  const onCreate = (content: string): void => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    // setTodos([newItem, ...todos]);
    dispatch({ type: "CREATE", newItem });
    idRef.current += 1;
  };

  const onUpdate = (targetId: number): void => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
    //   ),
    // );
    dispatch({ type: "UPDATE", targetId });
  };

  const onDelete = (targetId: number): void => {
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    dispatch({ type: "DELETE", targetId });
  };

  return (
    <div className="container">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}
