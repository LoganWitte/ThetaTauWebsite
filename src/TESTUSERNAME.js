import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminUsername() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        axios.get('http://147.182.130.177/admin_username')
            .then(response => {
                if (response.data.username) {
                    setUsername(response.data.username);
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
        </div>
    );
}

export default AdminUsername;