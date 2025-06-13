import React, { useState, useEffect } from "react";

function PokemonSelector() {
    const [inputtedPokemon, setPokemon] = useState("");
    const [currentInput, setCurrentInput] = useState("");
    const [pokeJson, setPokeJson] = useState<{[key: string]: any}>({});
    useEffect(() => {
        const fetchDitto = async () => {
        try {
            const dittoData = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputtedPokemon}`);
            if (dittoData.ok){
                const data = await dittoData.json();
                console.log("data");
                console.log(data);
                setPokeJson(data);
            }
        }
            catch (error) {
                console.log(error);
            };
        }
        fetchDitto();
    }, [inputtedPokemon]
)
    return (
        <div>
            Input a pokemon
            <input 
                id = 'pokeInput'
                onChange = {(e) => setCurrentInput(e.target.value)}
                onKeyDown = {(e) => {
                    if (e.key == "Enter") {
                        setPokemon(currentInput.toLowerCase());
                    }
                }
                }/>
            pokemon inputted: {inputtedPokemon}
        <div>
            Pokemon data:
            {pokeJson.name} 

            {/* <div> */}
            {pokeJson.moves[0].move.name}
            {/* <div/> */}
        </div>
        </div>



    )
}

export default PokemonSelector;