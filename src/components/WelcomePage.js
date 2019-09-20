import React from "react";
// import {NavLink} from "react-router-dom";
import styled from "styled-components";

const H1Styled= styled.h1`
    text-align:center;
    color: sandybrown;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <H1Styled>Welcome to the ultimate fan site!</H1Styled>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      
    </section>
  );
}
