import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { v4 as uuidv4 } from "uuid";
import LiquidButtonCopy from "../components/LiquidButtonCopy";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleAdd = () => {
    // अगर इनपुट खाली है तो ऐड न हो
    if (todo.trim() === "") return;

    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  // फिक्स्ड फ़ंक्शन (बिना किसी एरर के)
  const handleCheckbox = (e) => {
    let id = e.target.name; // अब यहाँ सही ID मिलेगी

    // ओरिजिनल स्टेट को सुरक्षित रखने के लिए नई कॉपी बनाएं
    let newTodos = [...todos];

    let index = newTodos.findIndex((item) => {
      return item.id === id;
    });

    if (index !== -1) {
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    }
  };

  return (
    <div className="bg-slate-100 w-full h-screen overflow-auto">
      <Navbar />
      <div className="w-1/2 mx-auto my-5 rounded-xl px-10 py-5 bg-white shadow-xl shadow-slate-200/50 min-h-[80vh]">


        {/* Add todo section */}
        <div className="addTodo my-4 flex flex-col ">
          <h2 className="font-semibold text-4xl text-center mb-5">Add Your Todo</h2>
          <textarea
            onChange={handleChange}
            value={todo}
            className="w-full bg-slate-50 overflow-hidden  pt-5 pb-25 resize-none pl-5 mb-5 border-2 rounded-2xl border-black text-slate-800 "
          />
          <LiquidButtonCopy text="Add" onClick={handleAdd} />
        </div>


        <div className="social flex gap-3 text-5xl justify-center items-center p-10 text-slate-200">
          <i class="fa-brands fa-square-linkedin hover:text-slate-400 cursor-pointer"></i>
          <i class="fa-brands fa-square-github hover:text-slate-400 cursor-pointer"></i>
          <i class="fa-brands fa-square-x-twitter hover:text-slate-400 cursor-pointer"></i>
        </div>


        
      </div>
    </div>
  );
};

export default App;
