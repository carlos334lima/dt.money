import React from "react";

import logoSvg from "../../assets/logo.svg";

import { Container, Wrapper } from "./styles";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <img src={logoSvg} alt="Logo Svg" />
        <button>Nova Transação</button>
      </Wrapper>
    </Container>
  );
}
