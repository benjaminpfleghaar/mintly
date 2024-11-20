"use client";

import styled from "styled-components";
import { compareDates } from "@/lib/utils";
import Table from "@/components/layout/Table";
import { Transactions } from "@/types/Transactions";
import HorizontalRow from "@/components/layout/HorizontalRow";

export default function TransactionsList({ transactions }: { transactions: Transactions[] }) {
	const transactionsSortedByDate = transactions.toSorted((a, b) => compareDates(a.date, b.date));
	const transactionsGroupedByDate = transactionsSortedByDate.reduce<{ [key: string]: Transactions[] }>(
		(result, transaction) => ({
			...result,
			[transaction.date]: [...(result[transaction.date] || []), transaction],
		}),
		{}
	);

	return (
		<StyledList>
			{Object.keys(transactionsGroupedByDate).map((date) => (
				<li key={date}>
					<Table date={date}>
						{transactionsGroupedByDate[date].map((transaction) => (
							<StyledListItem key={transaction.id} data-testid="transaction">
								<HorizontalRow {...transaction} />
							</StyledListItem>
						))}
					</Table>
				</li>
			))}
		</StyledList>
	);
}
const StyledList = styled.ul`
	display: flex;
	gap: var(--spacing-24);
	flex-direction: column;
`;
const StyledListItem = styled.li`
	border-bottom: 1px solid var(--color-gray-80);

	&:last-child {
		border: none;
	}
`;
