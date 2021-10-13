import React from "react";

import { Container } from "./styles";

export function TransactionTable() {
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
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 5.000,00</td>
            <td>DESENVOLVIMENTO</td>
            <td>20/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
