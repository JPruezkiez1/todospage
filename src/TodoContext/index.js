import React, { createContext } from "react";
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = createContext();

function TodoContextProvider(props) {
    const defaultTodos = [{ text: "Taskie for test", completed: false }];
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
        <TodoContext.Provider value={{
            loading,
            error,
            completedtodos,
            totaltodos,
            searchValue,
            handleToggleComplete,
            handleDelete,
            searchedTodos,
            todos,
            handleCreateTodo,
            completedtodos2,
            setSearchValue,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContextProvider, TodoContext };
