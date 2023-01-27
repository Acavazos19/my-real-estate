import React, { useState, useEffect } from 'react';
import '../styles/ProfileCss.css';
import '@fontsource/roboto/400.css';
import { styled } from '@mui/material/styles';
import { Container, Grid, Card, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import InventoryCard from './InventoryCard';

const ExpandMore = styled((props) => {
    const { expand, ...other} = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Profile = () => {
    const [favs, setFavs] = useState([]);
    const [expanded, setExpanded] = useState(false);

    const user = {
        name: 'AJ',
        email: 'aj@developer.com',
        favorites: [
            {
                "id": 24,
                "address": "8155 Jerde Row",
                "price": '144,9618',
                "bedrooms": 7, 
                "bathrooms": 4
                ,"lot_size": 3,
                "image": null,
                "market": "Buy"
                ,"description": "Modi unde ut. Et consequatur fuga. Dignissimos illo molestiae.",
            },
            {
                "id": 22,
                "address": "3376 Hackett Ville",
                "price": "959,871"
                ,"bedrooms": 6,
                "bathrooms": 4,
                "lot_size": 7,
                "image": null,
                "market": "Rent",
                "description": "Fugiat laboriosam accusantium. Excepturi repellat beatae. Ut nisi ullam.",
            }
        ]
    };
    
    useEffect(() => {
        setFavs(user.favorites)
        fetch("/favorites")
        .then(r => r.json())
        .then(favs => console.log(favs))
    }, []);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const renderFavs = favs.map(fav => {
        return (
            <InventoryCard data={fav} isFav={true} />
        )
    });

   return (
       <Container className="root">
           <Grid>
                <Grid>
                    <h3>
                        Profile
                    </h3>
                </Grid>
                <Grid>
                    <Card>
                        <CardHeader 
                            avatar={
                                <Avatar>A</Avatar>
                            }
                            title={
                                user?.name
                            }
                        />
                        <CardContent>
                            <Typography align="center">
                                Email: {user?.email}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <ExpandMore
                                expand={expanded}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Grid container style={{ justifyContent: 'space-around' }}>
                                    {renderFavs}
                                </Grid>
                            </CardContent>
                        </Collapse>
                    </Card>
                </Grid>
           </Grid>
       </Container>
   )
};

export default Profile;
