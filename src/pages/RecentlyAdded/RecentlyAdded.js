import React, { useState, useEffect } from 'react';
import GameCard from '../../components/GameCard/GameCard';
function RecentlyAdded() {
    const [added, setAdded] = useState([]);
    // eslint-disable-next-line
    const [api, setApi] = useState('https://www.freetogame.com/api/games?sort-by=release-date');

    useEffect(() => {


        fetch(api)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAdded(sortAdded);
                console.log(sortAdded);
            });
        // eslint-disable-next-line
    }, []);

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
