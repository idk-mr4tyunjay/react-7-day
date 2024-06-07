// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter something:
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedValue && (
        <div>
          <h2>You submitted: {submittedValue}</h2>
        </div>
      )}
    </div>
  );
};

export default Form;
