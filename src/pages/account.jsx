import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Accountpage = () => {
    const { logOut, user } = UserAuth();
    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <section>
            <div>
                <h1>Account</h1>
                <h2>Welcome, {user?.displayName} </h2>
            </div>
            <div>
                <button onClick={handleSignOut} >Logout</button>
            </div>
        </section>
    );
};

export default Accountpage;