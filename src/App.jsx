import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'





function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]); // Add task to list
      setTask(''); // Clear input
    }
  };

  const deleteTask = (index) => {
    const newList = taskList.filter((_, i) => i !== index);
    setTaskList(newList);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>📝 Sneha's To-Do List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '1rem',
          borderRadius: '8px',
          marginRight: '10px',
        }}
      />

      <button
        onClick={addTask}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '8px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Task
      </button>

      <ul style={{ marginTop: '30px', listStyle: 'none', padding: 0 }}>
        {taskList.map((t, index) => (
          <li
            key={index}
            style={{
              fontSize: '1.2rem',
              marginBottom: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {t}
            <button
              onClick={() => deleteTask(index)}
              style={{
                padding: '5px 10px',
                background: 'red',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default App;


// task : jo user input field mein likh raha hai 

// setTask : use value ko update karne ka function

// initially '' (empty string) se start karte hain
