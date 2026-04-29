import "./TodoList.css";

import { type Todo } from "../types/Todo";

import TodoItem from "./TodoItem";
import { useState } from "react";

interface TodoListProps {
  todos: Todo[];
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
  const [query, setQuery] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filtered =
    query === ""
      ? todos
      : todos.filter((todo) =>
          todo.content.toLowerCase().includes(query.toLowerCase()),
        );

  // const getSearchResult = (): Todo[] => {
  //   return query === ""
  //     ? todos
  //     : todos.filter((todo) =>
  //         todo.content.toLowerCase().includes(query.toLowerCase()),
  //       );
  // };

  return (
    <div className="todo-list">
      <h4>Todo List 📋</h4>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        className="search"
        value={query}
        onChange={onChange}
      />
      <ul>
        {/* {getSearchResult().map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))} */}
        {filtered.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
}
