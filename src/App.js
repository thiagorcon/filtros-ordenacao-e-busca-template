import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [inputId, setInputId] = useState("");
  const [inputNome, setInputNome] = useState("");

  const pokemonsFiltrados = pokemons
    .filter((pokemon) => {
      // o ' return pokemon.id.includes(inputId.padStart(3,0)) ' faz com que tenha 3 elemento -  ex : digitar 1 ele traz 001

      // usando op ternário: se input for verdadeiro traz o pokemen procurado e for falso traz todos
      return inputId ? pokemon.id.includes(inputId.padStart(3, 0)) : pokemon;
    })
    .filter((pokemon) => {
      return pokemon.name.english.toLowerCase().includes(inputNome.toLowerCase());
    });

  return (
    <>
      <GlobalStyle />
      <Header
        inputId={inputId}
        setInputId={setInputId}
        inputNome={inputNome}
        setInputNome={setInputNome}
      />
      <CardsContainer>
        {pokemonsFiltrados.map((pokemon) => {
          return (
            <PokemonCard
              cardColor={getColors(pokemon.type[0])}
              key={pokemon.id}
              pokemon={pokemon}
            />
          );
        })}
      </CardsContainer>
    </>
  );
}

export default App;

// envio
