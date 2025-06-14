import React, { useState, useEffect } from "react";

function PokemonSelector() {
    const [inputtedPokemon, setPokemon] = useState("");
    const [currentInput, setCurrentInput] = useState("");
    const [pokeJson, setPokeJson] = useState<{ [key: string]: any }>({});
    useEffect(() => {
        const fetchDitto = async () => {
            try {
                const dittoData = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputtedPokemon}`);
                if (dittoData.ok) {
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
                id='pokeInput'
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setPokemon(currentInput.toLowerCase());
                    }
                }
                } />
            <div style={{ display: 'flex-box', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ padding: '10px' }}>

                    Pokemon data:
                    <div>
                        {pokeJson.name}
                    </div>

                    {/* {pokeJson.moves && <div>
                    {pokeJson.moves[0].move.name}
                </div>} */}
                    {pokeJson.types && <div style={{ padding: '10px' }}>
                        {pokeJson.types[0].type.name}
                    </div>}

                    {pokeJson.sprites && <img
                        src={pokeJson.sprites.front_default}>
                    </img>}
                </div>
            </div>

            {pokeJson.name && <button>
                Save {pokeJson.name}
            </button>}
        </div>



    )
}

export default PokemonSelector;