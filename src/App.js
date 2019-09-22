import React from "react";
import Header from "./components/Header.js";
import { Route, NavLink } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList.js";
import CharacterCard from "./components/CharacterCard.js";

export default function App() {
  return (
    <main>
      <Route render={() => <Header />} />
      <Route exact path="/" render={() => <WelcomePage />} />
      <Route
        exact
        path="/components/CharacterList"
        render={props => <CharacterList />}
      />
      <Route
        path="/components/CharacterList/:id"
        render={props => <CharacterCard {...props} />}
      />
      <NavLink to="/components/CharacterList">Click Here to Begin</NavLink>
    </main>
  );
}
