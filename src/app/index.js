import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';
import { AppTasks } from './AppTasks.js';



const defaultTodos = [
  { text: 'Task Sample. Check it to complete it!', completed: false },
];
function App() {

  //////////////////// tercera VIST//////////
  // Initialize todos state using the useLocalStorage hook,
  // with 'TODOS_V1' as the storage key and defaultTodos as the initial value
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);

  // Initialize searchValue state for filtering todos
  const [searchValue, setSearchValue] = React.useState('');

  // Count the number of completed todos
  const completedtodos = todos.filter(todo => !!todo.completed).length
  const completedtodos2 = todos.filter(todo => !!todo.completed)
  const totaltodos = todos.length;

  // Filter todos based on searchValue and convert text to lowercase for case-insensitive search
  const searchedTodos = todos.filter(todo => {
    const searchText = searchValue.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);
  });

  // Function to handle creating a new todo
  const handleCreateTodo = newTodo => {
    // Create a new array with the updated todos list by adding the new todo
    const updatedTodos = [...todos, newTodo];
    // Update the todos state with the new array
    setTodos(updatedTodos);
  };

  // Function to handle toggling the completion status of a todo
  const handleToggleComplete = todoText => {
    // Create a new array by mapping over todos and toggling the completed status
    const updatedTodos = todos.map(todo =>
      todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
    );
    // Update the todos state with the new array
    setTodos(updatedTodos);
  };

  // Function to handle deleting a todo
  const handleDelete = todoText => {
    // Create a new array by filtering out the todo with the specified text
    const updatedTodos = todos.filter(todo => todo.text !== todoText);
    // Update the todos state with the new array
    setTodos(updatedTodos);
  };

  // Render the components and UI
  return (
    <AppTasks
      completedtodos={completedtodos}
      totaltodos={totaltodos}
      searchValue={searchValue}
      handleToggleComplete={handleToggleComplete}
      handleDelete={handleDelete}
      searchedTodos={searchedTodos}
      todos={todos}
      handleCreateTodo={handleCreateTodo}
      completedtodos2={completedtodos2}
      setSearchValue={setSearchValue}
    />
  );
}


export default App;