import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TransactionForm from "@/components/layout/TransactionForm";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

describe("A header shows the transaction name", () => {
	test("Render headline (Whole Mart)", () => {
		render(<TransactionDetailsPage id="1" />);
		const headline = screen.getByRole("heading", { level: 1, name: "Whole Mart" });
		expect(headline).toBeInTheDocument();
	});
});

describe("The form is pre-filled with the transaction's existing details", () => {
	test("Amount is pre-filled", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const amount = screen.getByDisplayValue("52.3");
		expect(amount).toBeInTheDocument();
	});

	test("Name is pre-filled", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const name = screen.getByDisplayValue("Whole Mart");
		expect(name).toBeInTheDocument();
	});
});
