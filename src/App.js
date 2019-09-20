import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";


export default function App() {
  return (
    <main>
      <Route  render={() => <Header/>} />
      <Route exact path="/" render={()=> <WelcomePage/>}/>
      <Route path="/components/CharacterList" render={() => <CharacterList/>}/>
      <NavLink to="/components/CharacterList" >Click Here to Begin</NavLink>
    </main>
  );
}
