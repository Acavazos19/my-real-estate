import React, { useState } from 'react';
import './styles/AppCss.css';
import { Switch, Route, Link } from 'react-router-dom';
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

  return (
    <div className="app">
      <Grid container className="nav">
        <Grid className="title">
          <h1>iReal Estate</h1>
        </Grid>
        <Grid>
          <Link to="/about" className="about-tab">About</Link>
          <Link to="/login" className="login-tab">Log In</Link>
          <Link to="/inventory" className="home-tab">Homes</Link>
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
            <Inventory />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
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
