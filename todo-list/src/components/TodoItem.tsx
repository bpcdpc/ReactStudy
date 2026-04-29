import "./TodoItem.css";

import { type Todo } from "../types/Todo";

interface TodoItemProps {
  todo: Todo;
  onUpdate: (targetId: number) => void;
  onDelete: (targetId: number) => void;
}

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  const { id, isDone, content, createDate } = todo;

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
}
