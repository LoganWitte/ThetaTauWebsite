import React, { useEffect, useState } from 'react';
function AdminUsername() {
    const [username, setUsername] = useState('');

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
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {console.log(getShopItems())}}>getShopItems</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {console.log(getBrothers())}}>getBrothers</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {console.log(getRushText())}}>getRushText</button>
            <br />
            <button className="bg-white text-black border-black p-2 m-2 rounded-full border" onClick={() => {console.log(getDailyInfo())}}>getDailyInfo</button>
            <br />
        </div>
    );
}

export default AdminUsername;
