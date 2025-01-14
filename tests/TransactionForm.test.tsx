import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TransactionsPage from "@/components/page/TransactionsPage";
import TransactionForm from "@/components/layout/TransactionForm";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

jest.mock("nanoid", () => ({
	nanoid() {
		return "123";
	},
}));

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
	useSearchParams: () => ({
		get: jest.fn(),
	}),
	usePathname: jest.fn(),
}));

describe("The form includes labeled, mandatory fields", () => {
	test("Render amount field", () => {
		render(<TransactionForm mode="create" />);
		const input = screen.getByLabelText("Amount");
		expect(input).toBeInTheDocument();
	});

	test("Render name field", () => {
		render(<TransactionForm mode="create" />);
		const input = screen.getByLabelText("Name");
		expect(input).toBeInTheDocument();
	});

	test("Render category field", () => {
		render(<TransactionForm mode="create" />);
		const input = screen.getByLabelText("Category");
		expect(input).toBeInTheDocument();
	});

	test("Render date field", () => {
		render(<TransactionForm mode="create" />);
		const input = screen.getByLabelText("Date");
		expect(input).toBeInTheDocument();
	});
});

describe("The amount field displays the placeholder text 0.00 when the user has not entered any value", () => {
	test("Render amount placeholder (0.00)", () => {
		render(<TransactionForm mode="create" />);
		const placeholder = screen.getByPlaceholderText("0.00");
		expect(placeholder).toBeInTheDocument();
	});
});

describe("The category field uses a drop-down menu with existing categories, with the first category already preselected", () => {
	test("Select first value (Education)", () => {
		render(<TransactionForm mode="create" />);
		const value = screen.getByDisplayValue("Education");
		expect(value).toBeInTheDocument();
	});
});

describe("Form submission is blocked if any required field is empty, and validation messages clearly indicate the incomplete fields", () => {
	test("Render error messages", async () => {
		const user = userEvent.setup();
		render(<TransactionForm mode="create" />);
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
		render(<TransactionForm mode="create" />);

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

	test("Category is pre-filled", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const category = screen.getByDisplayValue("Groceries");
		expect(category).toBeInTheDocument();
	});

	test("Type is pre-filled", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const type = screen.getByLabelText("Expense");
		expect(type).toBeChecked();
	});

	test("Date is pre-filled", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const day = screen.getByDisplayValue("5");
		expect(day).toBeInTheDocument();

		const month = screen.getByDisplayValue("9");
		expect(month).toBeInTheDocument();

		const year = screen.getByDisplayValue("2024");
		expect(year).toBeInTheDocument();
	});
});

describe("The form includes options to Save or Cancel the edit", () => {
	test("Render Save button", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const saveButton = screen.getByRole("button", { name: "Save" });
		expect(saveButton).toBeInTheDocument();
	});

	test("Render Cancel button", () => {
		render(<TransactionForm mode="edit" id="1" />);
		const cancelButton = screen.getByRole("button", { name: "Cancel" });
		expect(cancelButton).toBeInTheDocument();
	});
});

describe("If the user cancels the editing, they are returned to the transaction details page without changes", () => {
	test("Cancel form and redirect user", async () => {
		const push = jest.fn();
		(useRouter as jest.Mock).mockImplementation(() => ({
			push,
		}));

		const user = userEvent.setup();
		render(<TransactionForm mode="edit" id="1" />);

		const button = screen.getByRole("button", { name: "Cancel" });
		expect(button).toBeInTheDocument();

		await user.click(button);
		expect(push).toHaveBeenCalledWith("/1");
	});
});

describe("After form submission, the user is redirected back to the transaction details page and a success message is displayed", () => {
	test("Submit form and redirect user", async () => {
		const push = jest.fn();
		(useRouter as jest.Mock).mockImplementation(() => ({
			push,
		}));

		const user = userEvent.setup();
		render(<TransactionForm mode="edit" id="1" />);

		const button = screen.getByRole("button", { name: "Save" });
		expect(button).toBeInTheDocument();

		await user.click(button);
		expect(push).toHaveBeenCalledWith("/1");
	});
});
