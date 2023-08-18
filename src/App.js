import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './arcilag.css'
import './todolistblock.css'



const defaultTodos = [
  { text: 'Task Sample. Check it to complete it!', completed: false },
];

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  try {
    parsedItem = JSON.parse(localStorageItem);
  } catch (error) {
    console.error(`Error parsing ${itemName} from localStorage:`, error);
  }

  const [item, setItem] = React.useState(parsedItem || initialValue);

  const saveItem = newItem => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}



function App() {

  //////////////////// tercera VIST//////////

  const [tab, setTab] = React.useState('TODOLIST');
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
    <>
      <header>
        <button className='todolistbtn' onClick={() => setTab('TODOLIST')}> All Tasks</button>
        <button className='gatitochanbtn' onClick={() => setTab('GATITOCHAN')}> Completed Taks</button>
        <button className='testiepagebtn' onClick={() => setTab('TESTIEPAGE')}> Pending section!!</button>
      </header>

      {tab === 'TODOLIST' ? (
        <React.Fragment>

          <TodoCounter completed={completedtodos} total={totaltodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {/* <div className='TODOLISTBLOCK'> */}
          <TodoList>
            {searchedTodos.map(todo => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDelete}
              />
            ))}
          </TodoList>
          {/* </div> */}
          <CreateTodoButton todos={todos} onCreateTodo={handleCreateTodo} />
        </React.Fragment>

      ) : tab === 'GATITOCHAN' ? (
        <TodoList>
          {completedtodos2.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDelete}
            />
          ))}
        </TodoList>
      ) : (

        <React.Fragment>
          <div className='arcilagtest'>

            <h1 >Arcilag Photo ID below!!</h1>
            <img src='https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg' alt='Arcilag faces' width="500" height='600' ></img>
          </div>
        </React.Fragment>
      )}
    </>

  );
}


export default App;