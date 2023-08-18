import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';
import { AppTasks } from './AppTasks.js';

const defaultTodos = [{ text: "Taskie for test", completed: false }];


function App() {
  const { item: todos, saveItem: setTodos, loading, error } = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const completedtodos = todos.filter(todo => !!todo.completed).length;
  const completedtodos2 = todos.filter(todo => !!todo.completed);
  const totaltodos = todos.length;

  const searchedTodos = todos.filter(todo => {
    const searchText = searchValue.toLowerCase();
    const todoText = todo.text.toLowerCase();
    return todoText.includes(searchText);
  });

  const handleCreateTodo = newTodo => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  const handleToggleComplete = todoText => {
    const updatedTodos = todos.map(todo =>
      todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDelete = todoText => {
    const updatedTodos = todos.filter(todo => todo.text !== todoText);
    setTodos(updatedTodos);
  };

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
      loading={loading && todos.length > 0} // Pass loading only when there are todos
      error={error}
    />
  );
}
export default App;