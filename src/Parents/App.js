// App.js

import React from 'react';
import { Routes, Route, BrowserRouter, StaticRouter } from "react-router-dom";
import Home from '../Routes/home-page';
import Login from '../Routes/login-page';
import Register from '../Routes/register-page';
import Test from '../Routes/test-page';
import ForgetPassword from '../Routes/forgetpassword-page';
import Dashboard from '../Routes/dashboard-page';

// import './../Static/inspinia/style/style.css';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/font-awesome/css/font-awesome.css';
// import '../../node_modules/animate.css/animate.min.css';

class App extends React.Component {
  render() {
    const reload = () => window.location.reload();

    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />
            <Route exact path="/test" Component={Test} />
            <Route exact path="/forgetpassword" Component={ForgetPassword} />
            <Route exact path="/dashboard" Component={Dashboard} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
