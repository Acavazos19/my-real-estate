import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const ExpandMore = styled(( props ) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const InventoryCard = ({ data, isFav = false }) => {
    const [expanded, setExpanded] = useState(false);
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        fetch(`/inventories/${data.id}`)
        .then(r => r.json())
        .then(isFav => console.log(isFav))
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleFavoriteClick = () => {
        setFavorite(!favorite);
        favorite ? fetch("/favorites", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_id: 16,
                inventory_id: data.id,
            })
        })
        .then(r => r.json())
        .then(fav => console.log('[+] favorite')) : 
        fetch("/favorites", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                inventory_id: data.id,
            })
        })
    };

    return (
        <Card className="inventory-card">
                <Link to={`/inventory/${data.id}`}>
                    <Grid container className="card-details">
                        <h2>{data.address}</h2>
                        <Grid>
                            <p>$ {data.price}</p>
                        </Grid>
                    </Grid>
                </Link>
                <CardActions disableSpacing>
                    {isFav ? null : <IconButton aria-label="add to favorites" onClick={handleFavoriteClick}>
                        <FavoriteIcon style={{ fill: favorite ? 'red' : null }} />
                    </IconButton>}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unMountedExit>
                    <CardContent>
                        <Typography paragraph>
                            <p className="details">Bedrooms: {data.bedrooms}</p>
                            <p className="details">Bathrooms: {data.bathrooms}</p>
                            <p className="details">Description: {data.description}</p>
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
    )
};

export default InventoryCard;
