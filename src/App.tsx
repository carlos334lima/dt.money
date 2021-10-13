import React from "react";

//@libraries
import { createServer } from "miragejs";

//@components
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

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

function App() {
  return (
    <>
      <Header />
      <Dashboard />
    </>
  );
}

export default App;
