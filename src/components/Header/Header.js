import React from "react";
import { Container } from "./styles";

const Header = ({inputId,setInputId,inputNome,setInputNome}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  function manipularInputId(event) {
    setInputId(event.target.value);
  }
  function manipularInputNome(event) {
    //console.log(event.target.value);
    setInputNome(event.target.value);
  }
  return (
    <Container>
      <input type="number" value={inputId} onChange={manipularInputId} placeholder="Buscar por id" 
      //aqui faz com que não deixe ter números negativos
      min={0}/>
      <input type="text" placeholder="Buscar por nome" value={inputNome} onChange={manipularInputNome} />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
