import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import { func } from "prop-types";

export default function CharacterList(props) {
  console.log(props);
  const [charactersList, setCharactersList] = useState([]);
  // TODO: Add useState to track data from useEffect
  const charactersApi = `https://rickandmortyapi.com/api/character/`;
  useEffect(() => {
    axios
      .get(charactersApi)
      .then(response => {
        console.log("response data", response);
        setCharactersList(charactersList.concat(response.data.results));
        console.log(charactersList)
      })
      .catch(error => error.message);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  //<Route path="/components/CharacterList" render={() => <CharacterList/>}/>

  return (<>
      <h1>Character List</h1>
       {charactersList.map((character) => {
        return (<>
          <p> Character Name: {character.name}</p>
            <p>Character species: {character.species}</p>
            <p> Character gender: {character.gender}</p>
            <CharacterClicked key={character.id} character={character}/>
            
            </> )
  })}
  </>
)   

}

const CharacterClicked = (character) => {
  console.log(" hello from characterclicked",)
  const id = character.character.id;
 return <NavLink to={`/components/CharacterList/${id}`}>Click to view Character</NavLink> 

}
