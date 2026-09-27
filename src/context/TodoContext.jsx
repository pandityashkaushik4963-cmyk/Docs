import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoContext = createContext();
const STORAGE_KEY = "todos-app-data";
const TAG_COLORS = ["green", "blue"];

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load todos:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (e) {
      console.error("Failed to save todos:", e);
    }
  }, [todos]);

  const addTodo = (text) => {
    if (!text || !text.trim()) return;
    setTodos((prev) => [
      ...prev,
      {
        id: uuidv4(),
        text: text.trim(),
        isCompleted: false,
        tagColor: TAG_COLORS[Math.floor(Math.random() * TAG_COLORS.length)],
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
  const ctx = useContext(TodoContext);
  if (!ctx) throw new Error("useTodos must be used within a TodoProvider");
  return ctx;
};