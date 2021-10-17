import React, { useEffect, useState } from "react";

//@libraries
import moment from "moment";

//@utils
import { api } from "../../services/api";

//@styles
import { Container } from "./styles";

type Transactions = {
  amount: number;
  category: string;
  title: string;
  id: string;
  type: string;
  createdAt: string;
};

export function TransactionTable() {
  const [data, setData] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      setData(response.data.transactions);
      console.log("@response", response.data.transactions);
    });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {data.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>R$ {transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{moment(transaction.createdAt).format("DD/MM/YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
