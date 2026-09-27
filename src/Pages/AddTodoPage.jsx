import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LiquidButtonCopy from "../components/LiquidButtonCopy";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../context/TodoContext";

const AddTodoPage = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodos();
  const navigate = useNavigate();

  const handleAdd = () => {
    if (todo.trim() === "") return;
    addTodo(todo);
    setTodo("");
    navigate("/YourTaskPage"); // jump straight to the new card
  };

  const handleChange = (e) => setTodo(e.target.value);

  return (
    <div className="bg-[#060b13] w-full h-screen overflow-auto">
      <Navbar />
      <div className="w-1/2 mx-auto my-5 rounded-xl px-10 py-5 bg-[#0B0F19]/60 backdrop-blur-xl border border-white/10   min-h-[80vh]">
        <div className="addTodo my-4 flex flex-col">
          <h2 className="font-semibold text-4xl text-center mb-5  text-slate-100 ">Add Your Todo</h2>
          <textarea
            onChange={handleChange}
            value={todo}
            className="w-full bg-[#161f30] text-white focus:border-cyan-500 overflow-hidden pt-5 pb-25 resize-none pl-5 mb-5 border-2 rounded-2xl border-black caret-cyan-400"
          />
          <LiquidButtonCopy text="Add" onClick={handleAdd} />
        </div>

        <div className="social flex gap-3 text-5xl justify-center items-center p-10 text-slate-500 ">
          <a href="www.linkedin.com/in/yash-kaushik-84582941b" target="_blank" rel="noopener noreferrer" >
            <i className="fa-brands fa-square-linkedin hover:text-cyan-400 cursor-pointer"></i>
          </a>
          <a href="https://github.com/pandityashkaushik4963-cmyk" target="_blank" rel="noopener noreferrer" >
            <i className="fa-brands fa-square-github hover:text-cyan-400 cursor-pointer"></i>
          </a>
          <a href="https://x.com/Yash_kaushik008" target="_blank" rel="noopener noreferrer" >
            <i className="fa-brands fa-square-x-twitter hover:text-cyan-400 cursor-pointer"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddTodoPage;