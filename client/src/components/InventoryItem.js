import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/500.css';
import { Card, CardHeader, Container, Grid, Typography, CardMedia } from '@mui/material';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const [home, setHome] = useState('');
    const [proHome, setProHome] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`/inventories/${id}`)
        .then(r => r.json())
        .then(home => setHome(home))
    }, [id]);

    useEffect(() => {
        fetch("https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21")
        .then(r => r.json())
        .then(zillow => setProHome(zillow?.value[Math.floor(Math.random() * 10) + 1]))
    }, [id])

    console.log('[+] home:', proHome?.Media?.[0]);
    return (
       <Container>
            <Grid>
                <Card>
                    <Grid container justifyContent="space-around">
                        <Grid item>
                            <CardHeader
                                title={home?.address}
                            />
                            <CardMedia
                                component="img"
                                height="300px"
                                image={proHome?.Media?.[0].MediaURL}
                            />
                        </Grid>
                        <Grid item style={{ border: '1px solid #000', borderRadius: '1%', marginTop: '10px' }}>
                            <Grid style={{ padding: '10px', }}>
                                <Typography>
                                    Price: ${home?.price}
                                </Typography>
                                <Typography>
                                    Bedrooms: {home?.bedrooms}
                                </Typography>
                                <Typography>
                                    Bathrooms: {home?.bathrooms}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid style={{ border: '1px solid #000', margin: '20px', padding: '5px' }}>
                        <Typography style={{ padding: '5px', borderBottom: '5px solid #000' }}>
                            Details:
                        </Typography>
                        <Grid>
                            <Grid style={{ padding: '5px', }}>
                                <Typography>
                                    Heating:
                                </Typography>
                                <Typography>
                                    <ul>
                                        {proHome?.Heating?.map(heat => {
                                            return (
                                                <li>{heat}</li>
                                            )
                                        })}
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid>
                                <Typography>
                                    Views:
                                </Typography>
                                <Typography>
                                    <ul>
                                        {proHome?.View?.map(view => {
                                            console.log(view);
                                            return (
                                                <li>{view}</li>
                                            )
                                        })}
                                    </ul>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
       </Container>
    )
};

export default InventoryItem;
