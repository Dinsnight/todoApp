import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoApp({tasks}) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(tasks);
    return saved ? JSON.parse(saved) : [];
  });
  const [value, setValue] = useState('');

  const addTask = () => {
    if (value.trim() === "") return;

    const newTask = {
      task: value,
      date: new Date().toISOString(),
      completed: false
    };

    const newTodos = [newTask, ...todos];
    setTodos(newTodos);
    setValue("");
    localStorage.setItem(tasks, JSON.stringify(newTodos));
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    localStorage.setItem(tasks, JSON.stringify(newTodos));
  };

  const toggleCompleted = (index) => {
    const newTodos = todos.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item
    );
    setTodos(newTodos);
    localStorage.setItem(tasks, JSON.stringify(newTodos));
  };

  return (
    <div>
      <div className="d-flex m-3">
        <input
          className="form-control rounded-pill me-2"
          value={value}
          type="text"
          placeholder="Add a new task..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary rounded-pill" onClick={addTask}>
          Add
        </button>
      </div>

      <div className="row g-3 p-4">
        {todos.map((item, index) => (
          <div key={index} className="col-sm-12 col-md-6 col-lg-4">
            <div className="card p-2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  checked={item.completed}
                  onChange={() => toggleCompleted(index)}
                />
                <span style={{
                  textDecoration: item.completed ? 'line-through' : 'none'
                }}>
                  {item.task} — <small>{new Date(item.date).toLocaleDateString("uz-UZ", { timeZone: "Asia/Tashkent" })}</small>
                </span>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;