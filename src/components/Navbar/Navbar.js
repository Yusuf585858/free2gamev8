import './Navbar.css';
import React from 'react';
import Logo from '../../assets/img/Logo.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav className="navbarFlex">
            <Link to="/" ><div className="flex">
                <img className='logo' src={Logo} alt="s"></img>
                <h1 className='NavbarTitle'>FREE2GAME</h1>
            </div></Link>
            <input className='input' placeholder='🔎' style={{ textAlign: 'right' }} ></input>
        </nav >
    );
}
