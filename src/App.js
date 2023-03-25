import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [Todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...Todos, { text: input, status: false }]);
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>If there's a will ,There's a way </h2>
        <br />
      </div>
      <div className="input">
        <input
          type="text"
          value={input}
          placeholder="🖊️ Add item..."
          onChange={(event) => setInput(event.target.value)}
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {Todos.map((value) => {
          return (
            <div className="todo">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <p>{value}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default App;
