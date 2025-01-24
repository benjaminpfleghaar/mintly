import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import "./matchMedia.mock";
import userEvent from "@testing-library/user-event";
import HorizontalRow from "@/components/layout/HorizontalRow";
import TransactionsPage from "@/components/page/TransactionsPage";

const mockUseSearchParams = jest.fn();

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
	}),
	useSearchParams: () => ({
		get: () => {
			return mockUseSearchParams();
		},
	}),
	usePathname: jest.fn(),
}));

window.IntersectionObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	disconnect: jest.fn(),
}));
global.ResizeObserver = jest.fn().mockImplementation(() => ({
	observe: jest.fn(),
	unobserve: jest.fn(),
	disconnect: jest.fn(),
}));

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
		description: "Whole Mart",
		amount: -52.3,
		category: "Groceries",
		type: "Expense",
		date: "2024-09-05",
	};

	test("Render description (Whole Mart)", () => {
		render(<HorizontalRow {...transaction} />);
		const description = screen.getByText(transaction.description);
		expect(description).toBeInTheDocument();
	});
	test("Render category (Groceries)", () => {
		render(<HorizontalRow {...transaction} />);
		const img = screen.getByTestId("icon");
		expect(img).toHaveAttribute("src", "/images/Groceries.svg");
	});
	test("Render amount (52.30)", () => {
		render(<HorizontalRow {...transaction} />);
		const amount = screen.getByText(/52.30/i);
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

describe("A search field is displayed below the account balance on the transactions list page", () => {
	test("Render search field", () => {
		render(<TransactionsPage />);
		const input = screen.getByPlaceholderText("Search...");
		expect(input).toBeInTheDocument();
	});
});

describe("The search results display only transactions that match the search criteria", () => {
	test("Display filtered transactions based on query: Life", () => {
		mockUseSearchParams.mockImplementation(() => "Life");

		render(<TransactionsPage />);
		const transaction = screen.getByText("Life Insurance");
		expect(transaction).toBeInTheDocument();
	});
});

describe("A clear button is available in the search field to reset the search and display all transactions again", () => {
	test("Render clear button", () => {
		mockUseSearchParams.mockImplementation(() => "Life");

		render(<TransactionsPage />);
		const cancelButton = screen.getByRole("button", { name: "Reset search" });
		expect(cancelButton).toBeInTheDocument();
	});
});

describe("If no transactions match the search, a message should appear saying “No results found”", () => {
	test("Display empty state", () => {
		mockUseSearchParams.mockImplementation(() => "x");

		render(<TransactionsPage />);
		const transaction = screen.getByRole("heading", { level: 3, name: "No matches found" });
		expect(transaction).toBeInTheDocument();
	});
});

describe("The transactions list includes a scrollable section of filter options", () => {
	test("Render filter", () => {
		render(<TransactionsPage />);
		expect(screen.getByTestId("filter")).toBeInTheDocument();
	});
});

describe("Users can filter transactions by category", () => {
	test("Render filtered transactions", async () => {
		mockUseSearchParams.mockImplementation(() => "");

		const user = userEvent.setup();
		render(<TransactionsPage />);

		const button = screen.getByRole("button", { name: "Entertainment" });
		expect(button).toBeInTheDocument();

		await user.click(button);

		const filteredTransaction = screen.getByText("Movie Palace");
		expect(filteredTransaction).toBeInTheDocument();
	});
});

describe("Only one category filter can be selected at a time", () => {
	test("Only one active filter", () => {
		render(<TransactionsPage />);
		const filter = screen.getAllByRole("button", { current: true });
		expect(filter).toHaveLength(1);
	});
});

describe("The transactions list and balance updates in real-time as filters are applied or removed", () => {
	test("Update balance immediately", async () => {
		mockUseSearchParams.mockImplementation(() => "");

		const user = userEvent.setup();
		render(<TransactionsPage />);

		const button = screen.getByRole("button", { name: "Entertainment" });
		expect(button).toBeInTheDocument();

		await user.click(button);

		const amount = screen.getAllByText(/20.00/i);
		expect(amount).toHaveLength(2);
	});
});
