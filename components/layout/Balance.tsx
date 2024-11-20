"use client";

import styled from "styled-components";
import { rephraseAmount } from "@/lib/utils";
import { Transactions } from "@/types/Transactions";

export default function Balance({ transactions }: { transactions: Transactions[] }) {
	const transactionsAmount = transactions.length === 0 ? 0 : transactions.reduce((result, transaction) => result + transaction.amount, 0);

	return (
		<StyledSection>
			<StyledHeadline>Total balance</StyledHeadline>
			<StyledData value={transactionsAmount}>$ {rephraseAmount(transactionsAmount)}</StyledData>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	padding: var(--spacing-16);
	border-radius: var(--spacing-8);
	background: var(--color-green-100) url("/images/background.png") center right / contain no-repeat;
`;
const StyledHeadline = styled.h2`
	color: var(--color-gray-100);
	font: var(--font-regular-12);
	margin-bottom: var(--spacing-4);
`;
const StyledData = styled.data`
	font: var(--font-medium-24);
	color: var(--color-gray-100);
`;
