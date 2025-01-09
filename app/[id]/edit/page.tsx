import { Metadata } from "next";
import EditTransactionPage from "@/components/page/EditTransactionPage";

export const metadata: Metadata = {
	title: "Edit Transaction",
};

export default async function EditTransaction({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id;

	return <EditTransactionPage id={id} />;

	return id;
}
