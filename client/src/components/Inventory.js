import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
        console.log('[+]:', home);
        return (
            <Link to={`/inventory/${home.id}`}>
                <h2>{home.address}</h2>
            </Link>
        )
    })

    return (
        <div>
            <h1>Inventory</h1>
            {renderHomes}
        </div>
    )
};

export default Inventory;
