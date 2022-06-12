import './App.css';
import { useEffect, useState } from 'react';
import { AuthService } from './api.service';

function App() {

  useEffect (() => {
    /* global google */
   google.accounts.id.initialize({ 'client_id': process.env.REACT_APP_GOOGLE_CLIENT_ID, 'cookie_policy': 'single_host_origin',
   callback: responseGoogle, 'response_type': 'code', 'scope': 'profile email' 
   })

   google.accounts.id.renderButton( document.getElementById('signInDiv'), {
    theme: 'dark',
    size: 'large',
   })
  }
  , []);

  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const responseGoogle = async (response) => {
    console.log(response);
    setIsLoading(true);
    const resp = await AuthService.login(response)
    setIsLoading(false);
    if (resp.status === 200) {
      setUser(resp.data);
      setIsLoggedIn(true);
    }
    else {
      setError(resp.data);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <div id="signInDiv"></div>
      </header>
    </div>
  );
}

export default App;
