/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Component = ({ isLoggedIn }) => {
  const greeting = isLoggedIn ? "Welcome back!" : "Please log in.";
  const todos = ['Learn React', 'Build a project', 'Deploy'];
  const showTodos = todos.length > 0;

  return (
    <div>
      <h1>Mixed Component</h1>
      <p>{greeting}</p>
      {showTodos && (
        <ul>
          {todos.map(todo => (
            <li key={todo}>{todo}</li>
          ))}
        </ul>
      )}
      {!showTodos && <p>No todos available.</p>}
      <img src="src\assets\react.jpg" alt="react" />
    </div>
  );
};

export default Component;
