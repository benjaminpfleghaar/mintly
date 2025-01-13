"use client";

import styled from "styled-components";
import { useToast } from "@/states/useToast";
import Header from "@/components/layout/Header";
import Status from "@/components/layout/Status";
import Balance from "@/components/layout/Balance";
import { useSearchParams } from "next/navigation";
import { IconLinkProps } from "@/types/IconLinkProps";
import { getFilteredTransactions } from "@/lib/utils";
import ToastMessage from "@/components/ui/ToastMessage";
import { useTransactions } from "@/states/useTransactions";
import TransactionsList from "@/components/layout/TransactionsList";

export default function TransactionsPage() {
	const { showToast } = useToast();
	const { transactions } = useTransactions();

	const searchParams = useSearchParams();
	const query = searchParams.get("search") || "";
	const filteredTransactions = getFilteredTransactions(transactions, query);

	const iconOnRightSide: IconLinkProps = {
		icon: "Add",
		label: "Add new transaction",
		href: "/create",
	};

	return (
		<>
			{showToast && <ToastMessage />}
			<Header title="Transactions" iconOnRightSide={iconOnRightSide} />
			<StyledMain>
				<Balance transactions={transactions} />
				{transactions.length === 0 ? <Status type="empty" /> : filteredTransactions.length === 0 ? <Status type="search" /> : <TransactionsList transactions={filteredTransactions} />}
			</StyledMain>
		</>
	);
}

const StyledMain = styled.main`
	display: flex;
	margin-inline: auto;
	flex-direction: column;
	gap: var(--spacing-24);
	padding: var(--spacing-40) 0;
	margin-top: var(--spacing-64);
	width: min(640px, 100% - var(--spacing-32));
	min-height: calc(100dvh - var(--spacing-64));
`;
