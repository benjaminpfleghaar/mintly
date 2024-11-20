import { create } from "zustand";
import { Transactions } from "@/types/Transactions";
import { transactions as data } from "@/data/transactions";

export const useTransactions = create<{ transactions: Transactions[] }>(() => ({
	transactions: data,
}));
