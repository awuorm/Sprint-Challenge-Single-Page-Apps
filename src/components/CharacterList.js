import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  const [charactersList, setCharactersList] = useState([]);
  // TODO: Add useState to track data from useEffect
  const charactersApi = "https://rickandmortyapi.com/api/character/";
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

  return (
       charactersList.map((character) => {
        return (<>
          <p>{character.name}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            </> )
  })
)
     
    

}
