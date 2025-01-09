import { create } from "zustand";
import { Transactions } from "@/types/Transactions";
import { transactions as data } from "@/data/transactions";

interface TransactionState {
	transactions: Transactions[];
	addTransaction: (newTransaction: Transactions) => void;
	deleteTransaction: (transactionId: string) => void;
	updateTransaction: (editTransaction: Transactions) => void;
}

export const useTransactions = create<TransactionState>()((set) => ({
	transactions: data,
	addTransaction: (newTransaction) => set((state) => ({ transactions: [...state.transactions, newTransaction] })),
	deleteTransaction: (transactionId) => set((state) => ({ transactions: state.transactions.filter(({ id }) => id !== transactionId) })),
	updateTransaction: (editTransaction) =>
		set((state) => ({
			transactions: state.transactions.map((transaction) =>
				transaction.id === editTransaction.id
					? {
							...transaction,
							amount: editTransaction.amount,
							name: editTransaction.name,
							category: editTransaction.category,
							type: editTransaction.type,
							date: editTransaction.date,
					  }
					: transaction
			),
		})),
}));
