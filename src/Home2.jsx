import { useState } from 'react';

function App() {
  const [name, setName] = useState(''); // Store user input
  const [submittedName, setSubmittedName] = useState(''); // Show after submit

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubmittedName(name);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>👋 Hello Sneha!</h1>

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            marginRight: '10px'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: 'none',
            background: '#4CAF50',
            color: '#fff',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {submittedName && (
        <h2 style={{ marginTop: '30px' }}>
          Welcome, {submittedName}! 🌸
        </h2>
      )}
    </div>
  );
}

export default App;


// name holds the live typing input
// submittedName is set only when the form is submitted
// We show the welcome message only if there's a submitted name


// name: holds the text the user types in the input box (live typing).
// setName: updates that text whenever the user types.
// const [submittedName, setSubmittedName] = useState('');
// This holds the final submitted name (what shows up in the welcome message).
// It only updates when the form is submitted.


// const handleSubmit = (e) => {
//     e.preventDefault(); // stops the page from reloading
//     setSubmittedName(name); // set submittedName to current name
//   };

// This function runs when the form is submitted.
// It prevents the page from refreshing (default form behavior).
// Then it updates the final display message with the typed name.
  
