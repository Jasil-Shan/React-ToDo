import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [Todos, setTodos] = useState([]);
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...Todos, { id: Date.now(), text: input, status: false }]);
      setInput("");
    }
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
        {Todos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  value={obj.status}
                  onChange={(e) => {
                    setTodos(
                      Todos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                          console.log(obj2.status);
                        }
                        return obj2;
                      })
                    );
                  }}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() =>
                    setTodos(
                      Todos.filter((val) => {
                        if (val.id === obj.id) {
                          val = "";
                        }
                        return val;
                      })
                    )
                  }
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <br />
        <h2>Completed Tasks</h2>
        <br />
        {Todos.map((obj) => {
          if (obj.status) {
            return (
              <div>
                <ul className="cmp">
                  <li>{obj.text}</li>
                </ul>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
export default App;
