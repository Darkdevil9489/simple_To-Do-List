import "./styles.css";
import { useState } from "react";
export default function App() {
  const [output, setOut] = useState("");
  const [store, setStore] = useState([]);

  function change() {
    setStore([...store, { text: output, id: Date.now() }]);
    setOut("");
  } //...store is create a array and {text..} its opject is created main use is delete functiom implement

  function delet(id) {
    setStore(store.filter((data) => data.id !== id));
  }

  return (
    <div className="App">
      <h1>To-do-List</h1>
      <input
        type="text"
        value={output}
        onChange={(e) => setOut(e.target.value)}
      />
      <button onClick={change}>Click Here</button>

      <ol>
        {store.map((display) => (
          <li key={display.id}>
            {display.text}
            <div className="btn">
              <button onClick={() => delet(display.id)}>delet</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
