import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friendDetails = useLoaderData();
    const {id,name,phone, email} = friendDetails;
    console.log(friendDetails);
    return (
        <div>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default FriendDetail;