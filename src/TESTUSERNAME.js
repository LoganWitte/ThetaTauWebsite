import React, { useEffect, useState } from 'react';

function AdminUsername() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch('/admin_username')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
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
        </div>
    );
}

export default AdminUsername;