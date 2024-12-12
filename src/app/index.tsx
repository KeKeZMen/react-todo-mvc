import TodoBlock from "@/widgets/todo-block";

export default function App() {
  return (
    <div className="h-dvh flex mt-[100px] items-center flex-col">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl">todos</h1>
        <TodoBlock />
      </div>
      <a
        href="https://github.com/KeKeZMen/kekez-todo-mvc"
        className="border-b mt-[15px] transition-all hover:border-black"
      >
        Github repository
      </a>
    </div>
  );
}
