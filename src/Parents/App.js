// App.js

import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from '../Routes/home-page';
import Login from '../Routes/login-page';
import Register from '../Routes/register-page';
import Test from '../Routes/test-page';

class App extends React.Component {


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/test" Component={Test} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
