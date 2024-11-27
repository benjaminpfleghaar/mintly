import { DateModel } from "@/types/DateModel";
import { Transactions } from "@/types/Transactions";

// 2024-09-05 -> Thu, 5 September 2024
export function formatDate(date: string): string {
	const days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const newDate = new Date(date);

	return `${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
}

// -99.5 -> -$99.50
export function formatAmount(amount: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(amount);
}

// Sum of all transactions (return 0 if empty)
export function getTotalTransactionsAmount(transactions: Transactions[]): number {
	return transactions.reduce((result, transaction) => result + transaction.amount, 0) || 0;
}

// Sort transactions by date 2024-09-05 < 2024-09-10
// and group them by date 2024-09-05: [{...}, {...}, ...]
export function getGroupedTransactions(transactions: Transactions[]): { [key: string]: Transactions[] } {
	return transactions
		.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
		.reduce<{ [key: string]: Transactions[] }>(
			(result, transaction) => ({
				...result,
				[transaction.date]: [...(result[transaction.date] || []), transaction],
			}),
			{}
		);
}

// Use prop value or current date
export function parseDate(value?: string): DateModel {
	const currentDate = new Date();
	if (!value)
		return {
			day: currentDate.getDate(),
			month: currentDate.getMonth() + 1,
			year: currentDate.getFullYear(),
		};

	const [year, month, day] = value.split("-").map(Number);
	return { day, month, year };
}
