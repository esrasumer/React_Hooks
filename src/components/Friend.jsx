import React, { useState } from 'react'

export default function Friend() {
    const [friends, setFriends] = useState(["Ahmet", "Murat"]);

    return (
        <>
            <h2>Friends</h2>
            {friends.map((friend, index) => (
                <div key={index}>{friend}</div>
            ))}
            <button onClick={() => setFriends(["Ayşe", ...friends])}> add new friend</button>
            <hr />
        </>
    )
}
