import React, { useState, useEffect } from "react";


function SavedPokemon() {

    const [savedPokemon, setSavedPokemon] = useState([]);

    function removeItemFromStorage(data: { name: string; sprite: string }) {
        console.log("clicked")
        const unparsed = localStorage.getItem('savedPokemon'); // stringified JSON array
        var savedPokemon = unparsed ? JSON.parse(unparsed) : []; // parse to array
        // savedPokemon.push(data);
        savedPokemon = savedPokemon.filter((pokeData: { name: string; sprite: string }) => pokeData.name !== data.name)
        localStorage.setItem('savedPokemon', JSON.stringify(savedPokemon));
        console.log(savedPokemon)
        setSavedPokemon(savedPokemon)
        console.log("here")
    }

    useEffect(() => {
        var unparsed = localStorage.getItem('savedPokemon');
        // console.log(localStorage.length);
        console.log(`unparsed: ${unparsed}`)
        var savedPokemon = unparsed ? JSON.parse(unparsed) : [];
        console.log(`saved: ${savedPokemon}`)
        setSavedPokemon(savedPokemon);
    }, []
    )
    return (
        <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', fontSize: '30px' }}>
            Saved Pokemon
            {savedPokemon.map((pokemon, index) =>
                <div key={index} style={{ border: '2px solid black', backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ padding: '10px', fontSize: '20px', fontWeight: 'bold' }}>
                        {pokemon.name}
                    </div>
                    <img src={pokemon.sprite}>
                    </img>
                    <button
                        style={{ padding: '10px', fontSize: '15px' }}
                        onClick={() => removeItemFromStorage({name: pokemon.name, sprite: pokemon.sprite})}
                    >
                        remove {pokemon.name}
                    </button>
                </div>)}
        </div>



    )
}

export default SavedPokemon;