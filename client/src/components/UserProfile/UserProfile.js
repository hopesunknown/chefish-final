import React from 'react';

export default function UserProfile({ userDetails }) {

        return (
            <div>
                 <div className="UserProfile">
                    <h1>Welcome back, {userDetails.first_name}!</h1>
                    <h2>Email: {userDetails.email}</h2>
                    </div>
            </div>
        );
    }