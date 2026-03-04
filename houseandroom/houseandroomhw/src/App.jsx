import { useState } from "react";
import House from "./components/house";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>My Counter</div>

      <button onClick={() => setCount((count) => count - 1)}>-</button>

      {count}

      <button onClick={() => setCount((count) => count + 1)}>+</button>

      <hr />

      <House name="paradise" />
    </div>
  );
}
