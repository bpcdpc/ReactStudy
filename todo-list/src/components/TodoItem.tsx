import "./TodoItem.css";

import React, { useContext } from "react";

import { type Todo } from "../types/Todo";
import { TodoDispatchContext } from "../contexts/TodoContext";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export default React.memo(function TodoItem({ todo }: TodoItemProps) {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const { id, isDone, content, createDate } = todo;

  console.log(`${id} TodoItem 렌더링`);

  const onUpdateItem = () => {
    onUpdate(id);
  };

  const onDeleteItem = () => {
    onDelete(id);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={isDone ? true : false}
        onChange={onUpdateItem}
      />
      <p>
        <a
          role="button"
          onClick={onUpdateItem}
          className={isDone ? "done" : ""}
        >
          {content}
        </a>
      </p>
      <span>{new Date(createDate).toLocaleDateString()}</span>
      <button onClick={onDeleteItem}>삭제</button>
    </li>
  );
});
