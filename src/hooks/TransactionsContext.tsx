import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";

type Transactions = {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
};

type TransactionContextData = {
  data: Transactions[];
  createTransaction: (transaction: TransactionInput) => void;
};

type TransactionsProviderProps = {
  children: ReactNode;
};

type TransactionInput = Omit<Transactions, "id" | "createdAt">;

const TransactionContext = createContext(
  [] as unknown as TransactionContextData
);

function TransactionProvider({ children }: TransactionsProviderProps) {
  const [data, setData] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get("/transactions").then((response) => {
      setData(response.data.transactions);
    });
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    await api.post("/transactions", transaction).then((response) => {
      setData([...data, response.data.transaction]);
    });
  }

  return (
    <TransactionContext.Provider value={{ data: data, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  const context = useContext(TransactionContext);

  return context;
}

export { useTransaction, TransactionProvider };
