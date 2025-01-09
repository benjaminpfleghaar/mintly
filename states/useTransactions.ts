import { create } from "zustand";
import { Transactions } from "@/types/Transactions";
import { transactions as data } from "@/data/transactions";

interface TransactionState {
	transactions: Transactions[];
	addTransaction: (newTransaction: Transactions) => void;
	deleteTransaction: (transactionId: string) => void;
}

export const useTransactions = create<TransactionState>()((set) => ({
	transactions: data,
	addTransaction: (newTransaction) => set((state) => ({ transactions: [...state.transactions, newTransaction] })),
	deleteTransaction: (transactionId) => set((state) => ({ transactions: state.transactions.filter(({ id }) => id !== transactionId) })),
}));
