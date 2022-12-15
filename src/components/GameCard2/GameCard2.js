import "./GameCard.css";
import windows from '../../assets/img/Windows.png';
import web from '../../assets/img/Browser.png';
import React from 'react';
import { Link } from 'react-router-dom';

export default function GameCard(props) {
    let logoPlatform;
    if (props.platform === "Web Browser") {
        logoPlatform = web;
    } else if (props.platform === "PC (Windows)") {
        logoPlatform = windows;
    }
    return (
        <div className="gameCards">
            <img className="bild" src={props.} alt="FixiHartmann" ></img>
            <div>
                <h2>{props.title}</h2>
                <p className="description">{props.short_description}</p>
                <Link to={`./detailview/${props.id}`}><button className="read"  >Read More</button></Link>
            </div>

            <div className="gameCardFlex">
                <img src={logoPlatform} alt="FixiHartmann" ></img>

                <h3>{props.genre}</h3>
            </div>
        </div>
    );
}
