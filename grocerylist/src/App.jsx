import { useState } from "react";
import "./App.css";
import Add from "./components/add";
import Item from "./components/item";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  return (
    <div className="appBox">
      <h1>Grocery App</h1>
      <Add onAdd={addItem} />
      <Item items={items} />
    </div>
  );
};

export default App;