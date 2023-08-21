// Select Component
import React from "react";

const Select = ({ options, value, onChange }) => {
  return (
    <div className="select-list">
        <span className="label">Type</span>
        <select value={value} onChange={onChange}>
        {options.map((option) => (
            <option key={option} value={option}>
            {option}
            </option>
        ))}
        </select>
    </div>
  );
};

export default Select;

