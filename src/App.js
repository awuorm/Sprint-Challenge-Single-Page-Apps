import React from "react";
import Header from "./components/Header.js";
import { Route} from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";


export default function App() {
  return (
    <main>
      <Route render={() => <Header/>} />
      <Route render={()=> <WelcomePage/>}/>
    </main>
  );
}
