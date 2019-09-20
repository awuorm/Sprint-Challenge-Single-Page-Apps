import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const H1Styled = styled.h1`
  text-align: center;
  color: sandybrown;
`;

export default function CharacterCard(props) {
  const [character, setCharacter] = useState({});
  console.log("character cards", props);
  const id = props.match.params.id;
  const characterApi = `https://rickandmortyapi.com/api/character/${id}`;
  console.log("characters api", characterApi);
  useEffect(() => {
    axios
      .get(characterApi)
      .then(response => {
        console.log("response data", response);
        setCharacter(response.data);
        console.log(character);
      })
      .catch(error => error.message);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [id]);

  return (
    <>
      <NavLink to="/">Home</NavLink>
      <H1Styled>Character</H1Styled>
      <img src={`${character.image}`} />
      <p> Character Name: {character.name}</p>
      <p>Character species: {character.species}</p>
      <p> Character gender: {character.gender}</p>
    </>
  );
}
