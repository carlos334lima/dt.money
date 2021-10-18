//@libraries
import moment from "moment";

//@utils
import { useTransaction } from "../../hooks/TransactionsContext";

//@styles
import { Container } from "./styles";

export function TransactionTable() {
  const { data } = useTransaction();

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
              <td className={transaction.type}>
                {" "}
                R$ {transaction.type === "withdraw" && "-"} {transaction.amount}
              </td>
              <td>{transaction.category}</td>
              <td>{moment(transaction.createdAt).format("DD/MM/YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
