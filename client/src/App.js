import './styles/AppCss.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import './styles/NavCss.css';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Grid container className="nav">
        <div className="title">
          My Real Estate
        </div>
        <Link to="/about" className="about-tab">About</Link>
        <Link to="/homes" className="home-tab">Homes</Link>
      </Grid>
      <Container className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
