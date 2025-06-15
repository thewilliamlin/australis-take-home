import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PokemonSelector from "./components/PokemonSelector.tsx";
import SavedPokemon from "./components/SavedPokemon";

function App() {
  if (!localStorage.getItem('savedPokemon')) {
    localStorage.setItem('savedPokemon', JSON.stringify([]));
  }
  return (
    // <div style={{ padding: "2rem" }}>
    //   <h1>Welcome to the Challenge!</h1>
    //   <p>Start building here.</p>
    // </div>
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonSelector />} />
            <Route path="/Saved" element={<SavedPokemon />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

export default App;
