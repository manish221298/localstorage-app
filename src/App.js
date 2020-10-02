import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import UserForm from "./components/UserForm"
import DashBoard from "./components/DashBoard"

function App() {
  return (
    <BrowserRouter>
        <div>
            <Link to="/">UserForm</Link> - 
            <Link to="/DashBoard">Table</Link> 

            <Route path="/" component={UserForm} exact={true} />
            <Route path="/dashboard" component={DashBoard} />
        </div>
        </BrowserRouter>
  );
}

export default App;
