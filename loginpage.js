
import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      if (response.data.success) {
        setMessage(response.data.message);
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const responseGoogle = async (response) => {
    try {
      const { tokenId } = response;
      const googleResponse = await axios.post('http://localhost:5000/google-login', { tokenId });
      if (googleResponse.data.success) {
        setMessage(googleResponse.data.message);
      } else {
        setMessage(googleResponse.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button onClick={handleLogin}>Login</button>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <p>{message}</p>
    </div>
  );
}

export default App;

