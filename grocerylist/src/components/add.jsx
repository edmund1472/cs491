import { useState } from "react";
import Button from "./button";

const Add = ({ onAdd }) => {
    const [text, setText] =useState("")

    return (
        <div className="adding">
            <input
            className = "input"
            placeholder = "Enter grocery item"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <Button
            label = "add"
            onClick={() => {
                const item = inputRef.current.value.trim();
                if (!item) return;
                onAdd(item);
                inputRef.current.value = "";
        }}
        />
    </div>
    );
};

export default Add;
