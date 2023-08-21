// Input Component
import React from "react";

const Input = ({ type, name, value, onChange }) => {
  return (
    <div className="input-box">
        <span className="label">FIND RECIPES</span>
        <input type={type} name={name} value={value} onChange={onChange} />
    </div>

  );
};

export default Input;
