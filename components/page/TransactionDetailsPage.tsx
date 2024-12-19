"use client";

import styled from "styled-components";
import { formatDate } from "@/lib/utils";
import { formatAmount } from "@/lib/utils";
import Table from "@/components/layout/Table";
import Header from "@/components/layout/Header";
import { IconLinkProps } from "@/types/IconLinkProps";
import GhostButton from "@/components/ui/GhostButton";
import VerticalRow from "@/components/layout/VerticalRow";
// import { useTransactions } from "@/states/useTransactions";

export default function TransactionDetailsPage({ id }: { id: string }) {
	// const { transactions } = useTransactions();

	const iconOnLeftSide: IconLinkProps = {
		icon: "Back",
		label: "Back to transactions",
		href: "/",
	};

	const iconOnRightSide: IconLinkProps = {
		icon: "Edit",
		label: "Edit transaction",
		href: `/${id}/edit`,
	};

	return (
		<>
			<Header title="Metro Car Service" iconOnLeftSide={iconOnLeftSide} iconOnRightSide={iconOnRightSide} />
			<StyledMain>
				<StyledSection>
					<StyledHeadline>Amount</StyledHeadline>
					<StyledData value="-75">{formatAmount(-75)}</StyledData>
				</StyledSection>
				<Table>
					<StyledListItem>
						<VerticalRow icon="Transportation" title="Category" value="Transportation" />
					</StyledListItem>
					<StyledListItem>
						<VerticalRow icon="Card" title="Card" value="•••• •••• •••• 5436" />
					</StyledListItem>
					<StyledListItem>
						<VerticalRow icon="Calendar" title="Date" value={formatDate("2024-11-12")} />
					</StyledListItem>
					<StyledListItem>
						<VerticalRow icon="Expense" title="Type" value="Expense" />
					</StyledListItem>
				</Table>
				<GhostButton onClick={() => console.log("Delete")} label="Delete transaction" color="red" />
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
	min-height: calc(100svh - var(--spacing-64));
`;
const StyledSection = styled.section`
	display: flex;
	gap: var(--spacing-4);
	flex-direction: column;
`;
const StyledHeadline = styled.h2`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
`;
const StyledData = styled.data`
	font: var(--font-medium-40);
`;
const StyledListItem = styled.li`
	border-bottom: 1px solid var(--color-gray-80);

	&:last-child {
		border: none;
	}
`;
