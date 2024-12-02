import styled from "styled-components";
import Table from "@/components/layout/Table";
import { Transactions } from "@/types/Transactions";
import { getGroupedTransactions } from "@/lib/utils";
import HorizontalRow from "@/components/layout/HorizontalRow";

export default function TransactionsList({ transactions }: { transactions: Transactions[] }) {
	const groupedTransactions = getGroupedTransactions(transactions);

	return (
		<StyledList>
			{Object.keys(groupedTransactions).map((date) => (
				<li key={date}>
					<Table date={date}>
						{groupedTransactions[date].map((transaction) => (
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
