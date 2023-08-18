import React from 'react';
import { AppTasks } from './AppTasks.js';
import { TodoContextProvider } from '../TodoContext/index.js'

function App() {
  return (
    <TodoContextProvider>
      <AppTasks />
    </TodoContextProvider>
  );
}

export default App;