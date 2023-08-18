import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const variable = JSON.parse(localStorage.getItem("todos"));
  const form = document.getElementById("form");
  const todosUL = document.getElementById("todos");
  const todos = JSON.parse(localStorage.getItem("todos"));
  const [list, setList] = useState(variable);
  const [name, setName] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const temp = [];
  let id = Math.random();

  const toggleClass = (id) => {
    setList((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  });

  return (
    <>
      <h1>todos</h1>
      <form
        id="form"
        onSubmit={(e) => {
          setName("");
          e.preventDefault();
          setList([
            ...list,
            {
              id: id,
              name: name,
              isActive: false,
            },
          ]);
        }}
      >
        <input
          type="text"
          id="input"
          className="input"
          placeholder="Enter your todo"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ul className="todos" id="todos">
          {list.map((element) => (
            <li
              key={element.id}
              className={element.isActive ? "completed" : ""}
              onClick={() => toggleClass(element.id)}
              onContextMenu={(e) => {
                e.preventDefault();
                setList(list.filter((item) => item.id !== element.id));
              }}
            >
              {element.name}
            </li>
          ))}
        </ul>
      </form>
      <small>
        Left click to toggle complete <br></br> Right click to do delete the
        todo
      </small>
    </>
  );
}

export default App;
