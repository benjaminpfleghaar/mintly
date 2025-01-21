import { Suspense } from "react";
import TransactionsPage from "@/components/page/TransactionsPage";

export default function Transactions() {
	return (
		<Suspense>
			<TransactionsPage />
		</Suspense>
	);
}
