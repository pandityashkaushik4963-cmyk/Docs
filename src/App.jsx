import React from "react";
import Background from "./components/Background";
import Foreground from "./components/Foreground";
import HomePage from "./Pages/HomePage";
import AddTodoPage from "./Pages/AddTodoPage";
import YourTaskPage from "./Pages/YourTaskPage";
import { Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <div className="w-full relative h-screen bg-zinc-800">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddTodoPage" element={<AddTodoPage />} />
          <Route path="/YourTaskPage" element={<YourTaskPage />} />
        </Routes>
    </div>
  );
};

export default App;
