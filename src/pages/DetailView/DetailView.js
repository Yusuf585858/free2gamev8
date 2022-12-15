import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailView() {

    const { id } = useParams();
    // eslint-disable-next-line
    const [api, setApi] = useState(`https://www.freetogame.com/api/game?id=${id}`);
    const [detail, setDetail] = useState();



    useEffect(() => {
        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((DetailRes) => {
                setDetail(DetailRes);
                console.log(DetailRes);
            });

    }, [api]);



    return (
        <main className='m'>
            <div className='AGWR'>
                <img className='GWE' src={detail?.screenshots[0].image} alt='asdf'></img>
            </div>
            <article>
                <div className='fiD'>
                    <h1>{detail?.title}</h1>
                    <img alt='.' className='tBild' src={detail?.thumbnail}></img>
                    <p>Platfrom: {detail?.platform}</p>
                    <p>{detail?.genre}</p>
                    <a  href={detail?.game_url}><button className='play'>Play Now</button></a>
                </div>
                <div className='scD'>
                    <h1>About</h1>
                    <p className='txt'>{detail?.description}</p>
                </div>
            </article>
            <article className='AIMG'>
                <img alt='.' src={detail?.screenshots[1].image} ></img>
                <img alt='.' src={detail?.screenshots[2].image} ></img>
            </article>
            <section className='foot'>
                <div>
                    <h1>Additional Information</h1>
                    <p>Please note this free-to-play game may or my not offer optional in-game purchases</p>
                    <p>Devloper: {detail?.developer}</p>
                    <p>Publisher: {detail?.publisher}</p>
                    <p>Release Date : {detail?.release_date}</p>
                </div>
                {detail?.platform === "Windows" && <div>
                    <h1>Minimum System Requierments (Windows)</h1>
                    <p>OS: {detail?.minimum_system_requirements?.os}</p>
                    <p>Memory: {detail?.minimum_system_requirements?.memory}</p>
                    <p>Storage: {detail?.minimum_system_requirements?.storage}</p>
                    <p>Processor: {detail?.minimum_system_requirements?.processor}</p>
                    <p>Graphics: {detail?.minimum_system_requirements?.graphics}</p>
                </div>}
            </section>
        </main>
    );
}








