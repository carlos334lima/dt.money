//@assets
import incomeSvg from "../../assets/income.svg";
import outcomeSvg from "../../assets/outcome.svg";
import totalSvg from "../../assets/total.svg";

//@utils
import { useTransaction } from "../../hooks/TransactionsContext";

//@styles
import { Container } from "./styles";

export function Summary() {
  const { data } = useTransaction();

  const summary = data.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeSvg} alt="Entradas" />
        </header>
        <strong>R$ {summary.deposits}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeSvg} alt="Saídas" />
        </header>
        <strong>R$ {summary.withdraws}</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalSvg} alt="Entradas" />
        </header>
        <strong>R$ {summary.total}</strong>
      </div>
    </Container>
  );
}
