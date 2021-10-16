import React, { useState } from "react";

//@libraries
import { createServer } from "miragejs";

//@components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import ReactModal from "react-modal";

createServer({
  routes() {
    this.namespace = "/api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Desenvolvimento de Software",
          amount: 3000,
          type: "deposit",
          category: "Venda",
        },
      ];
    });
  },
});

ReactModal.setAppElement('#root');

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header handleOpenModal={handleOpenModal} />
      <Dashboard />
      <NewTransactionModal
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
}

export default App;
