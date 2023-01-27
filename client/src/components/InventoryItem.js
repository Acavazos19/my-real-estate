import React, { useState, useEffect } from 'react';
import '@fontsource/roboto/500.css';
import { 
    Card, CardHeader, Container, Grid, Typography, CardMedia, Box, Tab, ImageList, ImageListItem, Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const [home, setHome] = useState('');
    const [proHome, setProHome] = useState({});
    const [value, setValue] = useState('1');
    const { id } = useParams();

    useEffect(() => {
        fetch(`/inventories/${id}`)
        .then(r => r.json())
        .then(home => setHome(home))

        fetch("https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21")
        .then(r => r.json())
        .then(zillow => {
            setProHome(zillow?.value[Math.floor(Math.random() * 10) + 1])
            setValue(proHome?.Media?.[0]?.MediaURL)
        })

    }, [id]);

    const handleClick = (e) => {
        const { src } = e.target;
        setValue(src);
    };

    console.log(value);
    console.log(proHome?.Media?.[0]?.MediaURL)
    return (
       <Container>
            <Grid>
                <Card>
                    <CardHeader
                        title={home?.address}
                    />
                    <Grid container justifyContent="space-around">
                            {/* <CardMedia
                                component="img"
                                height="300px"
                                image={proHome?.Media?.[0].MediaURL}
                            /> */}
                        <Grid lg={6} item>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                                <img className="main-img" src={value} />
                            </Box>
                            <Grid lg={4} item style={{ border: '1px solid #000', borderRadius: '1%', marginTop: '10px' }}>
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
                        <Grid item>
                            <ImageList sx={{ width: 500, height: 450 }} rowHeight={164}>
                                {proHome?.Media?.map(item => {
                                    return (
                                        <ImageListItem key={item.MediaURL}>
                                            <img src={item.MediaURL} onClick={handleClick} />
                                        </ImageListItem>
                                    )
                                })}
                            </ImageList>
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
