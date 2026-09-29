
import { motion } from "motion/react";
import { FaRegFileAlt } from "react-icons/fa";

// `draggable` is decided by Foreground (drag is turned off on phones so it
// doesn't fight with touch scrolling).
const Card = ({ todo, reference, onDelete, onToggleComplete, draggable = true }) => {
  return (
    <motion.div
      drag={draggable}
      dragConstraints={reference}
      whileDrag={draggable ? { scale: 1.2 } : undefined}
      // RESPONSIVE: full width of its grid cell on mobile, fixed w-48 from md up (as before)
      className="relative shrink-0 w-full md:w-48 h-60 rounded-[40px]  text-white px-5 sm:px-6 py-8 overflow-hidden bg-[#0B0F19]/70 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
    >
      <div className="flex justify-between items-center">
        <FaRegFileAlt />
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => onToggleComplete(todo.id)}
        />
      </div>
      <p
        className={`text-xs leading-tight mt-5 font-semibold break-words ${
          todo.isCompleted ? "line-through text-zinc-400" : ""
        }`}
      >
        {todo.text}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-center px-4 sm:px-6 py-3">
          <button
            onClick={() => onDelete(todo.id)}
            className=" border-2 py-1 px-6 sm:px-8 text-sm rounded-xl  font-semibold active:scale-95 transition-all border-slate-700 text-slate-300 hover:bg-rose-500 hover:text-white hover:border-transparent"
          >
            Delete
          </button>
        </div>
        <div
          className={`tag w-full py-3 ${
            todo.isCompleted ? "bg-cyan-500/20 text-cyan-400 border-t border-cyan-500/30" : "bg-amber-500/20 text-amber-400 border-t border-amber-500/30"
          } flex items-center justify-center`}
        >
          <h3 className="text-sm font-semibold">
            {todo.isCompleted ? "Completed" : "Pending"}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
