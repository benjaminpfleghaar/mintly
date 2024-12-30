import "@testing-library/jest-dom";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import TransactionsPage from "@/components/page/TransactionsPage";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("Clicking the delete button on the transaction details page triggers a confirmation dialog", () => {
	test("Render delete dialog", async () => {
		const user = userEvent.setup();
		render(<TransactionDetailsPage id="1" />);
		const showDeleteDialogButton = screen.getByRole("button", { name: "Delete transaction" });
		expect(showDeleteDialogButton).toBeInTheDocument();

		await user.click(showDeleteDialogButton);
		expect(screen.getByTestId("delete-dialog")).toBeInTheDocument();
	});
});

describe("If the user cancels the deletion, they are returned to the transaction details page without changes", () => {
	test("Render delete transaction button", async () => {
		const user = userEvent.setup();
		render(<TransactionDetailsPage id="1" />);
		const showDeleteDialogButton = screen.getByRole("button", { name: "Delete transaction" });
		expect(showDeleteDialogButton).toBeInTheDocument();

		await user.click(showDeleteDialogButton);

		const hideDeleteDialogButton = screen.getByRole("button", { name: "Cancel" });
		expect(hideDeleteDialogButton).toBeInTheDocument();

		await user.click(hideDeleteDialogButton);

		expect(screen.queryByTestId("delete-dialog")).not.toBeInTheDocument();
	});
});

describe("After confirming the deletion, the transaction is removed from the list", () => {
	test("Deleted transaction is not visible", async () => {});
});

describe("After deletion, the user is redirected back to the transactions list and a success message is displayed", () => {
	test("Delete transaction and redirect user", async () => {});
});
