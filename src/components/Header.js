import React from "react";
import styled from "styled-components";

const H1Styled = styled.h1`
  text-align: center;
  color: sandybrown;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <H1Styled className="ui center">Rick &amp; Morty Fan Page</H1Styled>
    </header>
  );
}
