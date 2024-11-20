import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HorizontalRow from "@/components/layout/HorizontalRow";
import TransactionsPage from "@/components/page/TransactionsPage";

describe("The transaction list has a clear header indicating its purpose", () => {
	test("Render headline (Transactions)", () => {
		render(<TransactionsPage />);
		const headline = screen.getByRole("heading", { level: 1, name: "Transactions" });
		expect(headline).toBeInTheDocument();
	});
});

describe("The homepage displays a scrollable list of transactions", () => {
	test("Render all transactions (22)", () => {
		render(<TransactionsPage />);
		const transactions = screen.getAllByTestId("transaction");
		expect(transactions).toHaveLength(22);
	});
});

describe("Each transaction listing includes a category, a name and the amount", () => {
	const transaction = {
		id: "1",
		name: "Whole Mart",
		amount: 52.3,
		category: "Groceries",
		type: "Expense",
		date: "2024-09-05",
	};

	test("Render name (Whole Mart)", () => {
		render(<HorizontalRow {...transaction} />);
		const name = screen.getByText(transaction.name);
		expect(name).toBeInTheDocument();
	});
	test("Render category (Groceries)", () => {
		render(<HorizontalRow {...transaction} />);
		const img = screen.getByTestId("icon");
		expect(img).toHaveAttribute("src", "/images/Groceries.svg");
	});
	test("Render amount (52.30)", () => {
		render(<HorizontalRow {...transaction} />);
		const amount = screen.getByText(/52.3/i);
		expect(amount).toBeInTheDocument();
	});
});

describe("A button that redirects the user to the create transaction form is displayed on the top of the transactions list", () => {
	test("Render button", () => {
		render(<TransactionsPage />);
		const link = screen.getByLabelText("Add new transaction");
		expect(link).toBeInTheDocument();
	});
});
