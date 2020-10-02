import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Link } from 'react-router-dom'
import UserForm from "./components/UserForm"
import DashBoard from "./components/DashBoard"
import {Nav, Navbar} from "react-bootstrap"

function App() {
  return (
    <BrowserRouter>
        <div>

        <div>
                                <Navbar bg="light" expand="lg" variant="light">
                                <Navbar.Brand href={"/"}>Snipper Technology</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ml-auto">
                                <Nav.Link href={"/"}>UserForm</Nav.Link>
                                <Nav.Link href={"/dashboard"}>Table</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                                </Navbar>
                            </div>
            {/* <Nav.Link to="/">UserForm</Nav.Link> - 
            <Nav.Link to="/DashBoard">Table</Nav.Link>  */}

            <Route path="/" component={UserForm} exact={true} />
            <Route path="/dashboard" component={DashBoard} />
        </div>
        </BrowserRouter>
  );
}

export default App;
