import { useEffect, useState } from "react";

import GameCard from "../../components/GameCard/GameCard.js";

let GEAR = ["mmorpg", "shooter", "strategy", "moba", "racing", "sports", "social", "sandbox", "open-world", "survival", "pvp", "pve", "pixel", "voxel", "zombie", "turn-based", "first-person", "third-Person", 'top-down', "tank", "space", "sailing", "side-scroller", "superhero", "permadeath", "card", "battle-royale", "mmo", "mmofps", "mmotps", "3d", "2d", "anime", "fantasy", "sci-fi", "fighting", "action-rpg", "action", "military", "martial-arts", "flight", "low-spec", "tower-defense", "horror", "mmorts"];
let PLT = ["all", "pc", "browser"];
let Sby = ["alphabetical", "release-date", "popular"];

function AllGames() {
    const [plm, setP] = useState("all");
    const [category, setC] = useState("shooter");
    const [sort, setSort] = useState("alphabetical");
    const [add, setAd] = useState();
    const [activeButtonA, setActiveButtonA] = useState(0);
    const [activeButtonB, setActiveButtonB] = useState(0);
    const [activeButtonC, setActiveButtonC] = useState(1);
    useEffect(() => {

        fetch(`https://www.freetogame.com/api/games?platform=${plm}&category=${category}&sort-by=${sort}`)
            .then((response) => {
                return response.json();
            })
            .then((sortAdded) => {
                setAd(sortAdded);
            });
    }, [sort, plm, category]);
    const [search, setSearch] = useState('');
    if (add === undefined) {
        return;
    }
    return (
        <main>
            <input onChange={(e) => setSearch(e.target.value)} className='input' placeholder='🔎' style={{ textAlign: 'right' }}  ></input>
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
                                        {c.toUpperCase()}
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