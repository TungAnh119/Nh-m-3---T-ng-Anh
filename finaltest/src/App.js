import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Tab from "./components/Tabs";
import AddInput from "./components/AddInput";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";

function App() {
  const [tab, setTab] = useState("all");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos") ?? "[]");
    if (!!storedTodos.length) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, isDone: false }]);
  };

  const handleUpdateTodo = (id) => {
    const temp = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;
    temp[index]["isDone"] = !temp[index]["isDone"];
    setTodos(temp);
  };

  const handleDeleteTodo = (id) => {
    const temp = [...todos];
    const deleteIndex = todos.findIndex((todo) => todo.id === id);
    if (deleteIndex === -1) return;
    setTodos(temp.filter((_, index) => index !== deleteIndex));
  };

  const filterTodos = useMemo(() => {
    if (tab === "all") return todos;
    if (tab === "active") return todos.filter((todo) => !todo.isDone);
    return todos.filter((todo) => todo.isDone);
  }, [todos, tab]);

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="app-container">
      <div className="page-container">
        <h1>#todo</h1>
        <Tab
          items={[
            { name: "All", key: "all" },
            { name: "Active", key: "active" },
            { name: "Completed", key: "completed" },
          ]}
          activeKey={tab}
          onChange={(tab) => setTab(tab)}
        />
        <AddInput onAdd={handleAddTodo} />
        {filterTodos.map((todo, index) => (
          <TodoItem
            key={index}
            data={todo}
            onChange={() => handleUpdateTodo(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
        {!!todos.length && (
          <div className="footer">
            <Button color="danger" onClick={handleDeleteAll}>
              Delete all
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
