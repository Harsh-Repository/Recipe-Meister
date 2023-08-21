// Text Component
import React from "react";

const Text = ({ value, onUpdate }) => {
  const handleTextChange = (event) => {
    // Convert carriage returns to \n\n
    const textValue = event.target.value.replace(/(?:\r)/g, "\n\n");
    onUpdate(textValue);
  };

  return (
    <div className="text-box">
        <span className="label">Instructions</span>
        <textarea value={value} onChange={handleTextChange} />
    </div>
  );
};

export default Text;
