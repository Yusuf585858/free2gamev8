import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
function RecentlyAdded() {
    const [added, setAdded] = useState([]);
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=release-date', options)
            .then(response => response.json())
            .then(response => setAdded(response))
            .catch(err => console.error(err));

    })

        ;
    /* const [api, setApi] = useState('https://www.freetogame.com/api/games?sort-by=release-date');

    useEffect(() => {

        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAdded(sortAdded);
                console.log(sortAdded);
            });

    }, []); */

    const [search, setSearch] = useState('');


    return (
        <main>
            <input onChange={(e) => setSearch(e.target.value)} className='input' placeholder='🔎' style={{ textAlign: 'right' }}  ></input>
            <section className='Radd'>
                <div className='bg2'>
                    Recently Added
                </div>
                {added.filter((item) => {
                    return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                }).map((item, index) => {
                    return (
                        <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                    );
                })
                }
            </section>
        </main>
    );




}

export default RecentlyAdded;
