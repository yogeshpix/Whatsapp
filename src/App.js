import React, { useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className='app'>
      {user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Router>
            <Sidebar />
            <Switch>
              <Route path='/rooms/:roomId' component={Chat} />

              <Route path='/' component={Chat} />
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
