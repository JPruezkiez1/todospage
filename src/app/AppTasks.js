import React from 'react';
import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch.js';
import { TodoList } from '../TodoList/TodoList.js';
import { TodoItem } from '../TodoItem/TodoItem.js';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton.js';
import '../arcilag.css';

function AppTasks({
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
}) {
    const [tab, setTab] = React.useState('TODOLIST');

    return (
        <>
            <header>
                <button className='todolistbtn' onClick={() => setTab('TODOLIST')}> All Tasks</button>
                <button className='gatitochanbtn' onClick={() => setTab('GATITOCHAN')}> Completed Tasks</button>
                <button className='testiepagebtn' onClick={() => setTab('TESTIEPAGE')}> Pending section!!</button>
            </header>

            {tab === 'TODOLIST' ? (
                <React.Fragment>
                    <TodoCounter completed={completedtodos} total={totaltodos} />
                    <TodoSearch
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                    />
                    {loading && todos.length > 0 ? (
                        <p>Loading now...</p>
                    ) : error ? (
                        <p>Error while loading</p>
                    ) : searchedTodos.length === 0 ? (
                        <p>Add your first task!</p>
                    ) : (
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
                    )}
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
                        <h1>Arcilag Photo ID below!!</h1>
                        <img src='https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg' alt='Arcilag faces' width="500" height='600' />
                    </div>
                </React.Fragment>
            )}
        </>
    );
}

export { AppTasks };