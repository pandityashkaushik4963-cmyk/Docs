import { useRef, useState, useEffect } from "react";
import Card from "./Card";
import { useTodos } from "../context/TodoContext";

// Below this width (px) the cards become a scrollable grid instead of free-drag.
// Matches Tailwind's `md` breakpoint (768px). Change it here if you want.
const DRAG_MIN_WIDTH = 768;

const Foreground = () => {
  const ref = useRef(null);
  const { todos, deleteTodo, toggleComplete } = useTodos();

  // Track whether the screen is wide enough for free dragging
  const [canDrag, setCanDrag] = useState(
    typeof window !== "undefined" ? window.innerWidth >= DRAG_MIN_WIDTH : true
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DRAG_MIN_WIDTH}px)`);
    const update = (e) => setCanDrag(e.matches);
    setCanDrag(mq.matches);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div
      ref={ref}
      // RESPONSIVE:
      //  - mobile  : 2-column CSS grid, scrolls vertically, nothing goes off-screen
      //  - sm      : 3-column grid
      //  - md & up : original flex-wrap layout with draggable cards
      className="fixed top-24 left-0 z-3 w-full h-[calc(100dvh-6rem)] grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap content-start gap-3 sm:gap-5 md:gap-10 p-3 sm:p-5 overflow-y-auto overflow-x-hidden"
    >
      {todos.length === 0 ? (
        <p className="col-span-full text-zinc-500 font-semibold text-base sm:text-lg mt-10 mx-auto text-center px-4">
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
            draggable={canDrag}
          />
        ))
      )}
    </div>
  );
};

export default Foreground;
