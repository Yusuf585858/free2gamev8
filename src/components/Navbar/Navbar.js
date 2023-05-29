import './Navbar.css';
import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

export default function Navbar() {
    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="navbarFlex">
            <Link to="/" ><div className="flex">
                <img className='logo' src={Logo} alt="s"></img>
                <h1 className='NavbarTitle'>FREE2GAME</h1>
                {/* {user?.displayName ? (
                    <button onClick={handleSignOut}>Log out</button>) : (<Link to="/signin"><button>Sign In</button></Link>)} */}

            </div></Link>
            <input className='input' placeholder='🔎' style={{ textAlign: 'right' }} ></input>
        </nav >
    );
}
