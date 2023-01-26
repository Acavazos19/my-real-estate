import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {
    const [home, setHome] = useState('');
    const { id } = useParams();
    console.log('[+]:', id);

    useEffect(() => {
        fetch(`/inventories/${id}`)
        .then(r => r.json())
        .then(home => setHome(home))
    }, []);

    return (
        <div>
            <h3>IventoryItem</h3>
            <div>
                <h4>{home.address}</h4>
            </div>
        </div>
    )
};

export default InventoryItem;
