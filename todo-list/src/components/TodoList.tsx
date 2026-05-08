import "./TodoList.css";

import { type Todo } from "../types/Todo";

import TodoItem from "./TodoItem";
import { useContext, useMemo, useState } from "react";
import { TodoDispatchContext, TodoStateContext } from "../contexts/TodoContext";

export default function TodoList() {
  const { todos } = useContext(TodoStateContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
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

  const { totalCount, notDoneCount } = useMemo(() => {
    console.log("analyzeTodo 호출됨");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, notDoneCount };
  }, [todos]);

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
      <div className="todo-analyzer">
        남은 할 일 {notDoneCount} / {totalCount}
      </div>
      <ul>
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
