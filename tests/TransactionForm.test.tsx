import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TransactionForm from "@/components/layout/TransactionForm";

describe("The form includes labeled, mandatory fields", () => {
	test("Render amount field", () => {
		render(<TransactionForm />);
		const input = screen.getByLabelText("Amount");
		expect(input).toBeInTheDocument();
	});

	test("Render name field", () => {
		render(<TransactionForm />);
		const input = screen.getByLabelText("Name");
		expect(input).toBeInTheDocument();
	});

	test("Render category field", () => {
		render(<TransactionForm />);
		const input = screen.getByLabelText("Category");
		expect(input).toBeInTheDocument();
	});

	test("Render date field", () => {
		render(<TransactionForm />);
		const input = screen.getByLabelText("Date");
		expect(input).toBeInTheDocument();
	});
});

describe("The amount field displays the placeholder text 0.00 when the user has not entered any value", () => {
	test("Render amount placeholder (0.00)", () => {
		render(<TransactionForm />);
		const placeholder = screen.getByPlaceholderText("0.00");
		expect(placeholder).toBeInTheDocument();
	});
});

describe("The category field uses a drop-down menu with existing categories, with the first category already preselected", () => {
	test("Select first value (Education)", () => {
		render(<TransactionForm />);
		const value = screen.getByDisplayValue("Education");
		expect(value).toBeInTheDocument();
	});
});

describe("Form submission is blocked if any required field is empty, and validation messages clearly indicate the incomplete fields", () => {
	test("Disable submit button", () => {
		render(<TransactionForm />);
		const button = screen.getByText("Save");
		expect(button).toHaveAttribute("disabled");
	});
});
