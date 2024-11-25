import { Metadata } from "next";
import CreateTransactionPage from "@/components/page/CreateTransactionPage";

export const metadata: Metadata = {
	title: "Create transaction",
};

export default function CreateTransaction() {
	return <CreateTransactionPage />;
}
