import { useContext, useRef, useState } from "react";
import "./TodoEditor.css";
import { TodoDispatchContext } from "../contexts/TodoContext";

export default function TodoEditor() {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!content) {
      inputRef.current?.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="todo-editor">
      <h4>새로운 Todo 작성하기 ✍🏻</h4>
      <div>
        <input
          type="text"
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}
