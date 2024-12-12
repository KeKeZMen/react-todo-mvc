import { useCallback, useEffect, useRef } from "react";
import clsx from "clsx";

import { Todo } from "../../model";
import useHandleTodo from "./hooks/use-handle-todo";

type Props = {
  todo: Todo;
};

export default function TodoRow({ todo }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    isEditing,
    todoTitle,
    onChangeTodoTitle,
    onDeleteClick,
    onEditClick,
    onEditDoubleClick,
    onEnterTodoTitle,
    setIsEditing,
    setTodoTitle,
  } = useHandleTodo(todo);

  const handleWindowClick = useCallback(
    (e: MouseEvent) => {
      if (e.target instanceof Node && !rootRef.current?.contains(e.target)) {
        setIsEditing(false);
        setTodoTitle(todo.title);
      }
    },
    [todo.title, setIsEditing, setTodoTitle, rootRef]
  );

  useEffect(() => {
    if (isEditing) {
      window.addEventListener("click", handleWindowClick);
    } else {
      window.removeEventListener("click", handleWindowClick);
    }
  }, [isEditing, handleWindowClick]);

  useEffect(() => {
    if (inputRef.current && isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div
      ref={rootRef}
      className={clsx(
        "flex justify-between items-center gap-3 px-[60px] p-4 group relative border",
        isEditing && "border-rose-500",
        !isEditing && "border-white"
      )}
    >
      <button
        onClick={onEditClick}
        data-testid="status-button"
        className="absolute border flex items-center justify-center p-1 left-[30px] rounded-full size-[24px]"
      >
        {todo.status ? (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 11.917 9.724 16.5 19 7.5"
            />
          </svg>
        ) : (
          ""
        )}
      </button>

      {isEditing ? (
        <input
          data-testid="edit-input"
          type="text"
          className="ml-[10px] w-full outline-none"
          value={todoTitle}
          onChange={onChangeTodoTitle}
          onKeyUp={onEnterTodoTitle}
          ref={inputRef}
        />
      ) : (
        <p
          onDoubleClick={onEditDoubleClick}
          className={clsx(
            "ml-[10px] w-full",
            todo.status === true && "line-through"
          )}
        >
          {todoTitle}
        </p>
      )}

      <button
        className="hidden group-hover:block absolute right-[30px]"
        data-testid="delete-button"
        onClick={onDeleteClick}
      >
        X
      </button>
    </div>
  );
}
