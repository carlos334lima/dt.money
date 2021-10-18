/* eslint-disable array-callback-return */
import { FormEvent, useState } from "react";

//@libraries
import Modal from "react-modal";

//@assets
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

//@utils
import { useTransaction } from "../../hooks/TransactionsContext";

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
  const { createTransaction } = useTransaction();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState<"deposit" | "withdraw">("deposit");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({ amount, category, title, type });

    setTitle("");
    setAmount(0);
    setType("deposit");
    setCategory("");
    handleCloseModal();
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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

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

        <input
          placeholder="categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit" onClick={handleCreateNewTransaction}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};

export { NewTransactionModal };
