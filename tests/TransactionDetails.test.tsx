import "@testing-library/jest-dom";
import { formatDate } from "@/lib/utils";
import { render, screen } from "@testing-library/react";
import TransactionDetails from "@/components/layout/TransactionDetails";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

describe("A header shows the transaction name", () => {
	test("Render headline (Whole Mart)", () => {
		render(<TransactionDetailsPage id="1" />);
		const headline = screen.getByRole("heading", { level: 1, name: "Whole Mart" });
		expect(headline).toBeInTheDocument();
	});
});

describe("The transaction details page displays:", () => {
	test("Transaction Amount", () => {
		render(<TransactionDetailsPage id="1" />);
		const amount = screen.getByText("-$52.30");
		expect(amount).toBeInTheDocument();
	});
	test("Transaction Category", () => {
		render(<TransactionDetails category="Groceries" date="2024-09-05" type="Expense" />);
		const category = screen.getByText("Groceries");
		expect(category).toBeInTheDocument();
	});
	test("Transaction Category", () => {
		render(<TransactionDetails category="Groceries" date="2024-09-05" type="Expense" />);
		const type = screen.getByText("Expense");
		expect(type).toBeInTheDocument();
	});
	test("Transaction Date", () => {
		render(<TransactionDetails category="Groceries" date="2024-09-05" type="Expense" />);
		const date = screen.getByText(formatDate("2024-09-05"));
		expect(date).toBeInTheDocument();
	});
});

describe("The page includes an edit and a delete button", () => {
	test("Render edit button", () => {
		render(<TransactionDetailsPage id="1" />);
		const link = screen.getByLabelText("Edit transaction");
		expect(link).toBeInTheDocument();
	});
	test("Render delete button", () => {
		render(<TransactionDetailsPage id="1" />);
		const button = screen.getByRole("button", { name: "Delete transaction" });
		expect(button).toBeInTheDocument();
	});
});
