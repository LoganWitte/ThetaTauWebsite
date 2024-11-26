import React, { useEffect, useState } from 'react';

import { getBrothers } from './API';

function AdminUsername() {
    const [username, setUsername] = useState('');
    const [brothersData, setBrothersData] = useState(null);

    async function handleBrothersClick() {
        try {
            const data = await getBrothers();
            setBrothersData(data);
        } catch (error) {
            console.error('Error fetching brothers data:', error);
        }
    }

    useEffect(() => {
        async function fetchBrothers() {
            try {
                const data = await getBrothers();
                setBrothersData(data);
            } catch (error) {
                console.error('Error fetching brothers data:', error);
            }
        }
    
        fetchBrothers();
    }, []);
    

    useEffect(() => {
        fetch('/api/admin_username')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.username) {
                    setUsername(data.username);
                } else {
                    setUsername('No admin found');
                }
            })
            .catch(error => {
                console.error('Error fetching admin username:', error);
                setUsername('Error fetching admin username');
            });
    }, []);

    return (
        <div>
            <h1>Admin Username</h1>
            <p>{username}</p>
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {}}>getShopItems</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={handleBrothersClick}>{brothersData[1] ? brothersData[1].name : 'Loading...'}</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {}}>getRushText</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {}}>getDailyInfo</button>
            <br />
        </div>
    );
}

export default AdminUsername;
