
import React, { useState } from 'react';
import './NameInput.css';

const NameInput = ({ setName }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="name-input">
      <input
        type="text"
        placeholder="Masukkan nama kamu"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default NameInput;
