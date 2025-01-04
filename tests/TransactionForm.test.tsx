import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TransactionsPage from "@/components/page/TransactionsPage";
import TransactionForm from "@/components/layout/TransactionForm";

jest.mock("nanoid", () => ({
	nanoid() {
		return "123";
	},
}));

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

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
	test("Render error messages", async () => {
		const user = userEvent.setup();
		render(<TransactionForm />);
		const button = screen.getByRole("button", { name: "Save" });
		expect(button).toBeInTheDocument();

		await user.click(button);
		expect(screen.getByTestId("name-error")).toBeInTheDocument();
		expect(screen.getByTestId("amount-error")).toBeInTheDocument();
	});
});

describe("After form submission, the user is redirected back to the transactions list and a success message is displayed", () => {
	test("Submit form and redirect user", async () => {
		const push = jest.fn();
		(useRouter as jest.Mock).mockImplementation(() => ({
			push,
		}));

		const user = userEvent.setup();
		render(<TransactionForm />);

		const button = screen.getByRole("button", { name: "Save" });
		expect(button).toBeInTheDocument();

		const amount = screen.getByLabelText("Amount");
		await user.type(amount, "1");

		const name = screen.getByLabelText("Name");
		await user.type(name, "abc");

		await user.click(button);
		expect(push).toHaveBeenCalledWith("/");

		render(<TransactionsPage />);
		expect(screen.getByTestId("toast-message")).toBeInTheDocument();
	});
});
