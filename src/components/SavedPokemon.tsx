import React, { useState, useEffect } from "react";

function SavedPokemon() {
    const [inputtedPokemon, setPokemon] = useState("");
    const [savedPokemon, setSavedPokemon] = useState([]);
    const [pokeJson, setPokeJson] = useState<{ [key: string]: any }>({});
    useEffect(() => {
        // const fetchDitto = async () => {
        //     try {
        //         const dittoData = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputtedPokemon}`);
        //         if (dittoData.ok) {
        //             const data = await dittoData.json();
        //             console.log("data");
        //             console.log(data);
        //             setPokeJson(data);
        //         }
        //     }
        //     catch (error) {
        //         console.log(error);
        //     };
        // }
        // fetchDitto();
        var unparsed = localStorage.getItem('savedPokemon');
        // console.log(localStorage.length);
        console.log(`unparsed: ${unparsed}`)
        var savedPokemon = unparsed ? JSON.parse(unparsed) : [];
        console.log(`saved: ${savedPokemon}`)
        setSavedPokemon(savedPokemon);
    }, []
    )
    return (
        <div>
            Saved Pokemon
            {savedPokemon.map((pokemon, index) => 
            <div key={index}>
                <div>
                    {pokemon.name}
                </div>    
                    <img src={pokemon.sprite}>
                    </img>
            </div>)}
        </div>



    )
}

export default SavedPokemon;