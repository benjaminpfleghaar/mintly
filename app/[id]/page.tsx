import { Metadata } from "next";
import TransactionDetailsPage from "@/components/page/TransactionDetailsPage";

export const metadata: Metadata = {
	title: "Transaction Details",
};

export default async function TransactionDetails({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;

	return <TransactionDetailsPage id={id} />;
}
