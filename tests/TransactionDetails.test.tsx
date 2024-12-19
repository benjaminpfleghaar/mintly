import "@testing-library/jest-dom";
import { formatDate } from "@/lib/utils";
import { render, screen } from "@testing-library/react";
import TransactionDetails from "@/components/layout/TransactionDetails";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

describe("A header shows the transaction name", () => {
	test("Render headline (Metro Car Service)", () => {
		render(<TransactionDetailsPage id="0" />);
		const headline = screen.getByRole("heading", { level: 1, name: "Metro Car Service" });
		expect(headline).toBeInTheDocument();
	});
});

describe("The transaction details page displays:", () => {
	test("Transaction Amount", () => {
		render(<TransactionDetailsPage id="0" />);
		const amount = screen.getByText("-$75.00");
		expect(amount).toBeInTheDocument();
	});
	test("Transaction Category", () => {
		render(<TransactionDetails category="Transportation" date="2024-11-12" type="Expense" />);
		const category = screen.getByText("Transportation");
		expect(category).toBeInTheDocument();
	});
	test("Transaction Category", () => {
		render(<TransactionDetails category="Transportation" date="2024-11-12" type="Expense" />);
		const type = screen.getByText("Expense");
		expect(type).toBeInTheDocument();
	});
	test("Transaction Date", () => {
		render(<TransactionDetails category="Transportation" date="2024-11-12" type="Expense" />);
		const date = screen.getByText(formatDate("2024-11-12"));
		expect(date).toBeInTheDocument();
	});
});

describe("The page includes an edit and a delete button", () => {
	test("Render edit button", () => {
		render(<TransactionDetailsPage id="0" />);
		const link = screen.getByLabelText("Edit transaction");
		expect(link).toBeInTheDocument();
	});
	test("Render delete button", () => {
		render(<TransactionDetailsPage id="0" />);
		const button = screen.getByRole("button", { name: "Delete transaction" });
		expect(button).toBeInTheDocument();
	});
});
