import { Transactions } from "@/types/Transactions";

// 2024-09-05 -> Thu, 5 September 2024
export function formatDate(date: string) {
	const days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const newDate = new Date(date);

	return `${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}  ${newDate.getFullYear()}`;
}

// -99.5 -> -$99.50
export function formatAmount(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

// Sum of all transactions (return 0 if empty)
export function getTotalTransactionsAmount(transactions: Transactions[]) {
	return transactions.reduce((result, transaction) => result + transaction.amount, 0) || 0;
}

// Sort transactions by date 2024-09-05 < 2024-09-10
export function getSortedTransactions(transactions: Transactions[]) {
	return transactions.toSorted((a, b) => {
		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();

		return dateA - dateB;
	});
}

// Group transactions by date 2024-09-05: [{...}, {...}, ...]
export function getGroupedTransactions(transactions: Transactions[]) {
	const transactionsSortedByDate = getSortedTransactions(transactions);
	return transactionsSortedByDate.reduce<{ [key: string]: Transactions[] }>(
		(result, transaction) => ({
			...result,
			[transaction.date]: [...(result[transaction.date] || []), transaction],
		}),
		{}
	);
}
