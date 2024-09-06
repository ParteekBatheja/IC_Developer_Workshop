import { useState } from 'react';
import { hello_backend } from 'declarations/hello_backend'; // Ensure this import matches your actual backend module

function App() {
  const [error, setError] = useState(null);

  async function handleFetchDiscordLink() {
    try {
      const discordLink = await hello_backend.getDiscordLink();
      if (discordLink.startsWith('https://discord.gg/')) {
        window.location.href = discordLink;
      } else {
        setError('The fetched data is not a valid Discord link.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to fetch Discord link. Please try again later.');
    }
  }

  return (
    <main style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to The CU Lounge</h1>
      <button onClick={handleFetchDiscordLink} style={{ fontSize: '16px', padding: '10px 20px', marginTop: '20px' }}>
        Join Our Discord
      </button>
      {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
    </main>
  );
}

export default App;
