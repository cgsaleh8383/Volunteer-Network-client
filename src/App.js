import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import Inventory from './Components/Inventory/Inventory';
import Events from './Components/Events/Events';
import Admin from './Components/Admin/Admin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
    
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
         <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

            <PrivateRoute path="/register">
              <Register />
            </PrivateRoute>

            <PrivateRoute path="/volunteer/:title">
              <Register />
            </PrivateRoute>

            <Route path="/login">
              <Login />
            </Route>

            <PrivateRoute path="/events">
              <Events />
            </PrivateRoute>

            <PrivateRoute path="/inventory">
              <Inventory />
            </PrivateRoute>

           <Route path='/admin'>
             <Admin/>
           </Route>

        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
