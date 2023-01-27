import React from 'react';
import { Container, Grid } from '@mui/material';

const About = () => {
    return (
        <Container>
            <Grid container direction="row">
                <Grid style={{ margin: '0 auto' }}>
                    <h1 style={{ textAlign: 'center', }}>About</h1>
                </Grid>
                <Grid style={{ margin: '0 50px', border: '15px solid gray' }}>
                    <p style={{ padding: '15px', letterSpacing: '0.5px' }}>
                        Here at iReal Estate, we offer a comprehensive list of home inventory from all over the country!
                        Our simple design helps condense the information and serve you directly the information you are really concerned about.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
};

export default About;
