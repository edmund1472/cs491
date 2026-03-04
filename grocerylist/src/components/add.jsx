import { useState } from "react";
import Button from "./button";

const Add = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <div className="adding">
      <input
        className="input"
        placeholder="Enter grocery item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        label="Add"
        onClick={() => {
          if (text === "") return;
          onAdd(text);
          setText("");
        }}
      />
    </div>
  );
};

export default Add;