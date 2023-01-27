import React from 'react';
import { Grid, Card, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavCard = ({ data }) => {

    return (
        <Grid item>
            <Card>
                <Grid container>
                    <Grid style={{ padding: '8px', borderRight: '1px solid #000' }}>
                        {data?.address}
                    </Grid>
                    <Grid style={{ marginLeft: 'auto', padding: '8px', }}>
                        ${data?.price}
                    </Grid>
                </Grid>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon style={{ fill: 'red' }}/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default FavCard;
