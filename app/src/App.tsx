import React from 'react';
import Tasks from './components/Tasks'

const tasks = [
  {
    title: 'task1',
    completed: false
  },
  {
    title: 'title2',
    completed: false
  },
  {
    title: 'title3',
    completed: false
  }
]

function App() {
  return (
    <div>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
