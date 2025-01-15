"use client";

import { useState } from "react";
import styled from "styled-components";
import { useToast } from "@/states/useToast";
import Filter from "@/components/layout/Filter";
import Header from "@/components/layout/Header";
import Status from "@/components/layout/Status";
import Search from "@/components/ui/SearchInput";
import Balance from "@/components/layout/Balance";
import { useSearchParams } from "next/navigation";
import { IconLinkProps } from "@/types/IconLinkProps";
import ToastMessage from "@/components/ui/ToastMessage";
import { useTransactions } from "@/states/useTransactions";
import TransactionsList from "@/components/layout/TransactionsList";
import { getSearchedTransactions, getFilteredTransactions } from "@/lib/utils";

export default function TransactionsPage() {
	const { showToast } = useToast();
	const searchParams = useSearchParams();
	const { transactions } = useTransactions();
	const [filter, setFilter] = useState("");
	const filteredTransactions = getFilteredTransactions(transactions, filter);
	const searchedTransactions = getSearchedTransactions(filteredTransactions, searchParams.get("search") || "");

	const iconOnRightSide: IconLinkProps = {
		icon: "Add",
		label: "Add new transaction",
		href: "/create",
	};

	function handleFilter(category?: string) {
		setFilter(category || "");
	}

	return (
		<>
			{showToast && <ToastMessage />}
			<Header title="Transactions" iconOnRightSide={iconOnRightSide} />
			<StyledMain>
				<Balance transactions={searchedTransactions} />
				{transactions.length === 0 ? (
					<Status type="empty" />
				) : filteredTransactions.length === 0 ? (
					<>
						<Search />
						<Filter filter={filter} handleFilter={handleFilter} />
						<Status type="filter" onClick={() => handleFilter()} />
					</>
				) : searchedTransactions.length === 0 ? (
					<>
						<Search />
						<Filter filter={filter} handleFilter={handleFilter} />
						<Status type="search" />
					</>
				) : (
					<>
						<Search />
						<Filter filter={filter} handleFilter={handleFilter} />
						<TransactionsList transactions={searchedTransactions} />
					</>
				)}
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
