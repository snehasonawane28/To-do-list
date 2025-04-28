import { useState } from 'react';

function App() {
  const [liked, setLiked] = useState(false); // false = not liked yet

  const toggleLike = () => {
    setLiked(!liked); // Toggle true/false
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Hello Sneha 💖</h1>

      <button 
        onClick={toggleLike}
        style={{
          fontSize: '2rem',
          padding: '10px 20px',
          borderRadius: '10px',
          background: liked ? '#ff4d6d' : '#f0f0f0',
          color: liked ? '#fff' : '#000',
          border: 'none',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
      >
        {liked ? '❤️ Liked' : '🤍 Like'}
        
      </button>
    </div>
  );
}

export default App;
