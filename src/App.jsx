import HomePage from "./Pages/HomePage";
import AddTodoPage from "./Pages/AddTodoPage";
import YourTaskPage from "./Pages/YourTaskPage";
import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <div className="w-full relative h-screen bg-zinc-800">
      <CustomCursor />

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