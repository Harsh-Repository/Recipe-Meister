// InputTags Component
import React, { useState } from "react";

const InputTags = ({ tags, onAddTag, onRemoveTag }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  const handleTagRemove = (tag) => {
    onRemoveTag(tag);
  };

  return (
    <div className="input-tags">
      {tags.map((tag) => (
        <span key={tag} className="tag"> Keywords
          {tag}
          <button className="remove-btn" onClick={() => handleTagRemove(tag)}>
            &times;
          </button>
        </span>
      ))}
      <input
        type="text"
        className="tag-input"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder="Add a tag..."
      />
    </div>
  );
};

export default InputTags;
