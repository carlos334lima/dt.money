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
}

const NewTransactionModal = ({
  isModalOpen,
  handleCloseModal,
}: NewTransactionModalProps) => {
  return (
    <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
};

export { NewTransactionModal };
