import './CreateTodoButton.css';
import React from 'react';

function CreateTodoButton({ todos, onCreateTodo }) {
  const handleCreateTodo = () => {
    const taskName = window.prompt('Enter the task name:');
    if (taskName && taskName.length <= 80 && !todos.some(todo => todo.text === taskName)) {
      onCreateTodo({
        text: taskName,
        completed: false,
      });
    } else if (taskName) {
      if (taskName.length > 80) {
        window.alert('Task name is too long!! Keep it below 80 Characters!')
      } else {
        window.alert('Task with the same name already exists.');
      }
    }
  };

  return (
    <button onClick={handleCreateTodo} className="CreateTodoButton">
      +
    </button>
  );
}

export { CreateTodoButton };
