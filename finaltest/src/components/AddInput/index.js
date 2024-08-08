import { useState } from "react";
import Button from "../Button";

const AddInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    onAdd(text);
    setText("");
  };

  return (
    <div className="input-container">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
        placeholder="Add todo"
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
};

export default AddInput;
