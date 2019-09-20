import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <h1>Character List</h1>
      <p> Character Name: {character.name}</p>
      <p>Character species: {character.species}</p>
      <p> Character gender: {character.gender}</p>
      <img src={`${character.image}`} />
    </>
  );
}
