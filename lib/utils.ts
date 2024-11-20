// 2024-09-05 -> Thu, 5 September 2024
export function rephraseDate(date: string) {
	const days = ["Sun", "Mon", "Tue", "Wedn", "Thu", "Fri", "Sat"];
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const newDate = new Date(date);

	return `${days[newDate.getDay()]}, ${newDate.getDate()} ${months[newDate.getMonth()]}  ${newDate.getFullYear()}`;
}

// 2024-09-05 < 2024-09-10
export function compareDates(a: string, b: string) {
	const dateA = new Date(a).getTime();
	const dateB = new Date(b).getTime();

	return dateA - dateB;
}

// 100.0 -> 100.00
export function rephraseAmount(amount: number) {
	if (amount.toString().slice(-2, -1) === ".") return amount + "0";
	if (!amount.toString().includes(".")) return amount + ".00";

	return amount;
}
