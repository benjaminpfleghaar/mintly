import { DateModel } from "@/types/DateModel";
import { Transactions } from "@/types/Transactions";

// 2024-09-05 -> Thu, 5 September 2024
export function formatDate(date: string): string {
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const newDate = new Date(date);

	return `${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]} ${newDate.getFullYear()}`;
}

// add leading zero 1 -> 01
export function addLeadingZero(input: string) {
	return input.length === 1 ? "0" + input : input;
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

// Filter transactions based on categories
export function getFilteredTransactions(transactions: Transactions[], filter: string): Transactions[] {
	return transactions.filter(({ category }) => category.includes(filter));
}

// Search transactions based on search query
export function getSearchedTransactions(transactions: Transactions[], query: string): Transactions[] {
	return transactions.filter(({ name }) => name.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
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
