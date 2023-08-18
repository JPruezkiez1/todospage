import './CreateTodoButton.css';
import React from 'react';
function CreateTodoButton({ onCreateTodo }) {
  const handleCreateTodo = () => {
    const taskName = window.prompt('Enter the task name:');
    if (taskName) {
      onCreateTodo({
        text: taskName,
        completed: false,
      });
    }
  };

  return (
    <button onClick={handleCreateTodo} className="CreateTodoButton">
      +
    </button>
  );
}


export { CreateTodoButton };
