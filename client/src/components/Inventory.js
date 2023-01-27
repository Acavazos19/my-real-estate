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
