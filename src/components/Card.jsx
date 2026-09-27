
import { motion } from "motion/react";
import { FaRegFileAlt } from "react-icons/fa";

const Card = ({ todo, reference, onDelete, onToggleComplete }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative shrink-0 w-48 h-60 rounded-[40px] bg-zinc-900/90 text-white px-6 py-8 overflow-hidden"
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
        className={`text-xs leading-tight mt-5 font-semibold ${
          todo.isCompleted ? "line-through text-zinc-400" : ""
        }`}
      >
        {todo.text}
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-center px-6 py-3">
          <button
            onClick={() => onDelete(todo.id)}
            className="border-white border-2 py-1 px-8 text-sm rounded-xl hover:bg-white font-semibold active:scale-95 hover:text-black transition-all"
          >
            Delete
          </button>
        </div>
        <div
          className={`tag w-full py-3 ${
            todo.isCompleted ? "bg-green-600" : "bg-blue-600"
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