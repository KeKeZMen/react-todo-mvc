import TodoBlock from "@/widgets/todo-block";

export default function App() {
  return (
    <div className="h-dvh flex justify-center mt-[100px]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-6xl">todos</h1>
        <TodoBlock />
      </div>
    </div>
  );
}
