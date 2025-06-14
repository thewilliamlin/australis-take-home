import React, { useState, useEffect } from "react";

function SavedPokemon() {
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
            Saved Pokemon
        </div>



    )
}

export default SavedPokemon;