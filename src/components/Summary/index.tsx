import React from "react";

import incomeSvg from "../../assets/income.svg";

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
    </Container>
  );
}
