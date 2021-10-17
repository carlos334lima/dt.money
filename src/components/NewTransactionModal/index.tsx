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
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");

  function handleRegisterCount(event: FormEvent) {
    event.preventDefault();
  }

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

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder="categoria" />

        <button type="submit" onClick={handleRegisterCount}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};

export { NewTransactionModal };
