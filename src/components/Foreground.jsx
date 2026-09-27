import { useRef } from "react";
import Card from "./Card";
import { useTodos } from "../context/TodoContext";

const Foreground = () => {
  const ref = useRef(null);
  const { todos, deleteTodo, toggleComplete } = useTodos();

  return (
    <div
      ref={ref}
      className="fixed top-24 left-0 z-3 w-full h-[calc(100vh-6rem)] flex gap-10 flex-wrap p-5"
    >
      {todos.length === 0 ? (
        <p className="text-zinc-500 font-semibold text-lg mt-10 mx-auto">
          No todos yet — add one from the "Your Tasks" menu.
        </p>
      ) : (
        todos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            reference={ref}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default Foreground;