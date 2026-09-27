import HomePage from "./Pages/HomePage";
import AddTodoPage from "./Pages/AddTodoPage";
import YourTaskPage from "./Pages/YourTaskPage";
import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";

const App = () => {
  return (
    <div className="w-full relative h-screen bg-zinc-800">
      <TodoProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AddTodoPage" element={<AddTodoPage />} />
          <Route path="/YourTaskPage" element={<YourTaskPage />} />
        </Routes>
      </TodoProvider>
    </div>
  );
};

export default App;