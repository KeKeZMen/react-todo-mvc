import clsx from "clsx";

import { Todo } from "../../model";
import useHandleTodo from "./hooks/use-handle-todo";

type Props = {
  todo: Todo;
};

export default function TodoRow({ todo }: Props) {
  const {
    isEditing,
    onChangeTodoTitle,
    onDeleteClick,
    onEditClick,
    onEditDoubleClick,
    onEnterTodoTitle,
    todoTitle,
  } = useHandleTodo(todo);

  return (
    <div className="flex justify-between items-center gap-3 mx-[30px] px-[30px] p-4 group relative">
      <button
        onClick={onEditClick}
        className="absolute border flex items-center justify-center p-1 left-0 rounded-full size-[24px]"
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
          type="text"
          value={todoTitle}
          onChange={onChangeTodoTitle}
          onKeyUp={onEnterTodoTitle}
        />
      ) : (
        <p
          onDoubleClick={onEditDoubleClick}
          className={clsx("ml-[10px]", todo.status === true && "line-through")}
        >
          {todoTitle}
        </p>
      )}

      <button
        className="hidden group-hover:block absolute right-0"
        onClick={onDeleteClick}
      >
        X
      </button>
    </div>
  );
}
