import React from "react";

//@components
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionsTable";

//@styles
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
