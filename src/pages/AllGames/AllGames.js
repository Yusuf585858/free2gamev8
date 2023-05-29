import { useEffect, useState } from "react";

import GameCard from "../../components/GameCard/GameCard.js";

let GEAR = ["&category=mmorpg", "&category=shooter", "&category=strategy", "&category=moba", "&category=racing", "&category=sports", "&category=social", "&category=sandbox", "&category=open-world", "&category=survival", "&category=pvp", "&category=pve", "&category=pixel", "&category=voxel", "&category=zombie", "&category=turn-based", "&category=first-person", "&category=third-Person", '&category=top-down', "&category=tank", "&category=space", "&category=sailing", "&category=side-scroller", "&category=superhero", "&category=permadeath", "&category=card", "&category=battle-royale", "&category=mmo", "&category=mmofps", "&category=mmotps", "&category=3d", "&category=2d", "&category=anime", "&category=fantasy", "&category=sci-fi", "&category=fighting", "&category=action-rpg", "&category=action", "&category=military", "&category=martial-arts", "&category=flight", "&category=low-spec", "&category=tower-defense", "&category=horror", "&category=mmorts"];
let PLT = ["all", "pc", "browser"];
let Sby = ["alphabetical", "release-date", "popular"];

function AllGames() {
    const [plm, setP] = useState("all");
    const [category, setC] = useState("");
    const [sort, setSort] = useState("alphabetical");
    const [add, setAd] = useState();
    const [activeButtonA, setActiveButtonA] = useState(0);
    const [activeButtonB, setActiveButtonB] = useState(0);
    const [activeButtonC, setActiveButtonC] = useState();
    useEffect(() => {
        console.log(process.env.REACT_APP_KEY);
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_KEY,
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${plm}${category}&sort-by=${sort}`, options)
            .then(response => response.json())
            .then(sortAdded => setAd(sortAdded))
            .catch(err => console.error(err));

    }, [sort, plm, category]);
    const [search, setSearch] = useState('');
    if (add === undefined) {
        return;
    }
    return (
        <main>
            <input onChange={(e) => setSearch(e.target.value)} className='input' placeholder='🔎' style={{ textAlign: 'left' }}  ></input>
            <span className="mainContainer">
                <div className="bg">
                    All Games
                </div>
                <div className="Fbtn">
                    <details className="SortBtn1">
                        <summary>Platform</summary>
                        {PLT.map((a, indexA) => {
                            return (
                                <button key={indexA} onClick={() => {
                                    setP(a);
                                    setActiveButtonA(indexA);
                                }}
                                    style={{
                                        backgroundColor: activeButtonA === indexA ? "violet" : ""
                                    }
                                    }>
                                    {a.toUpperCase()}
                                </button>
                            );
                        })}
                    </details>
                    <details className="SortBtn2">
                        <summary>Sort by</summary>
                        {Sby.map((b, index) => {
                            return (
                                <button key={index} onClick={() => {
                                    setSort(b);
                                    setActiveButtonB(index);
                                }}
                                    style={{
                                        backgroundColor: activeButtonB === index ? "violet" : ""
                                    }}
                                >
                                    {b.toUpperCase()}
                                </button>
                            );
                        })}
                    </details>
                    <details className="SortBtn3">
                        <summary>GERNES</summary>
                        <div className="WAW">
                            {GEAR.map((c, indexB) => {
                                return (
                                    <button key={indexB} onClick={() => {
                                        setC(c);
                                        setActiveButtonC(indexB);
                                    }}
                                        style={{
                                            backgroundColor: activeButtonC === indexB ? "violet" : ""
                                        }}
                                    >
                                        {c.toUpperCase().slice(10)}
                                    </button>
                                );
                            })}
                        </div>
                    </details>
                </div>
                <div className="cardContainer">
                    {add.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                    }).map((item, index) => {
                        return (
                            <GameCard key={index} thumbnail={item.thumbnail} title={item.title} genre={item.genre} platform={item.platform} id={item.id} />
                        );
                    })}
                </div>
            </span>
        </main>
    );
}

export default AllGames;





