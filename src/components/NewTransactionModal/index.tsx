import { FormEvent, useState } from "react";

//@libraries
import Modal from "react-modal";

//@assets
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

//@styles
import { Container, TransactionTypeContainer, RadioBox } from "./styles";

type NewTransactionModalProps = {
  isModalOpen: boolean;
  handleCloseModal: () => void;
};

const NewTransactionModal = ({
  isModalOpen,
  handleCloseModal,
}: NewTransactionModalProps) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={handleCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <input placeholder="categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};

export { NewTransactionModal };
