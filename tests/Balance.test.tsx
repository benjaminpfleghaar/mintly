import "@testing-library/jest-dom";
import Balance from "@/components/layout/Balance";
import { render, screen } from "@testing-library/react";
import TransactionsPage from "@/components/page/TransactionsPage";

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
		replace: jest.fn(),
	}),
	useSearchParams: () => ({
		get: jest.fn(),
	}),
	usePathname: () => {},
}));

describe("The account balance is displayed prominently at the top of the transaction list", () => {
	test("Render balance", () => {
		render(<TransactionsPage />);
		const balance = screen.getByRole("heading", { level: 2, name: "Total balance" });
		expect(balance).toBeInTheDocument();
	});
});

describe("Display the balance as zero if no transactions are recorded", () => {
	test("Display 0.00", () => {
		render(<Balance transactions={[]} />);
		const amount = screen.getByText(/0.00/i);
		expect(amount).toBeInTheDocument();
	});
});
