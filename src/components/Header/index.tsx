import React, { useState } from "react";

//@assets
import logoSvg from "../../assets/logo.svg";

//styles
import { Container, Wrapper } from "./styles";

type HeaderProps = {
  handleOpenModal: () => void;
}

export const Header = ({ handleOpenModal }: HeaderProps) => (
  <Container>
    <Wrapper>
      <img src={logoSvg} alt="Logo Svg" />
      <button onClick={handleOpenModal}>Nova Transação</button>
    </Wrapper>
  </Container>
);
