import React, { useState, useEffect } from 'react';
import '../styles/InventoryCss.css';
import { Grid } from '@mui/material';
import InventoryCard from './InventoryCard';

const Inventory = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() => {
        fetch("/inventories")
        .then(r => r.json())
        .then(inventory => setHomes(inventory))

        fetch("https://api.bridgedataoutput.com/api/v2/OData/test/Property?access_token=6baca547742c6f96a6ff71b138424f21")
        .then(r => r.json())
        .then(results => console.log('[+]', results));
    }, []);

    const renderHomes = homes?.map((home) => {
        return (
            <InventoryCard key={home.id} data={home} />
        )
    });

    return (
        <div>
            <h1 className="inventory-title">Inventory</h1>
            <Grid container>
                {renderHomes}
            </Grid>
        </div>
    )
};

export default Inventory;
