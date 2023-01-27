import React from 'react';
import '../styles/HomeCss.css';
import { Link } from 'react-router-dom';
import { Container, Grid, Button } from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const Home = () => {
    return (
        <Container className="root">
            <Grid container direction="row">
                <Grid style={{ width: '100%', textAlign: 'center', }}>
                    <h2><HomeTwoToneIcon fontSize="large" />iReal Estate</h2>
                </Grid>
                <Grid style={{ margin: '0 auto', textAlign: 'center' }}>
                    <p>Find your dream home!</p>
                    <Button>
                        <Link to="/inventory">
                                Enter
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;