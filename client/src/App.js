import React, { useState } from 'react';
import './styles/AppCss.css';
import { Switch, Route, Link, NavLink } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import './styles/NavCss.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Inventory from './components/Inventory';
import InventoryItem from './components/InventoryItem';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [favorites, setFavorites] = useState([]);

  console.log(favorites); 

  return (
    <div className="app">
      <Grid container className="nav">
        <Grid className="title">
          <Link to="/">
            <h1>iReal Estate</h1>
          </Link>
        </Grid>
        <Grid className="tab-list">
          <NavLink to="/about" className="about-tab tab">About</NavLink>
          {loggedIn ? 
            <NavLink to="/logout" className="tab">Log Out</NavLink> :
            <NavLink to="/login" className="login-tab tab">Log In</NavLink>}
          <NavLink to="/inventory" className="home-tab tab">Homes</NavLink>
          {loggedIn ? null : <NavLink to="/signup" className="tab">Sign Up</NavLink>}
        </Grid>
      </Grid>
      <Container className="app-body">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/inventory/:id">
            <InventoryItem />
          </Route>
          <Route path="/inventory">
            <Inventory favorites={favorites} setFavorites={setFavorites} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path="/profile">
            <Profile user={user} favorites={favorites} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} setLoggedIn={setLoggedIn} />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
