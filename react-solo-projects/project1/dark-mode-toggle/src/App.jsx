import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleDarkMode = () => {
    if (toggle == false) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.body.style.transition = "0.5s";
    }
    if (toggle == true) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  useEffect(() => {
    toggleDarkMode();
  });

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Click</button>
      <div className="container">
        <h1>This is the best project!</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          possimus necessitatibus iusto aspernatur quam modi vero quidem sunt
          officiis voluptate atque quisquam dolore praesentium optio enim
          laboriosam veniam quia, vel quas similique voluptatem natus et
          perspiciatis ipsa! Explicabo, numquam eveniet?
        </p>
      </div>
    </>
  );
}

export default App;
