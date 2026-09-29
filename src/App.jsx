import HomePage from "./Pages/HomePage";
import AddTodoPage from "./Pages/AddTodoPage";
import YourTaskPage from "./Pages/YourTaskPage";
import { Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    // RESPONSIVE: min-h-dvh instead of h-screen so content can grow on short/mobile screens
    // (dvh also accounts for the mobile browser address bar)
    <div className="w-full relative min-h-dvh bg-zinc-800">
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
