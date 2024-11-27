import { create } from "zustand";
import { Transactions } from "@/types/Transactions";
import { transactions as data } from "@/data/transactions";

interface TransactionState {
	transactions: Transactions[];
	addTransaction: (newTransaction: Transactions) => void;
}

export const useTransactions = create<TransactionState>()((set) => ({
	transactions: data,
	addTransaction: (newTransaction) => set((state) => ({ transactions: [...state.transactions, newTransaction] })),
}));
