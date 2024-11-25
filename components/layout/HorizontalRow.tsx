"use client";

import Link from "next/link";
import styled from "styled-components";
import Icon from "@/components/ui/Icon";
import { formatAmount } from "@/lib/utils";
import { Transactions } from "@/types/Transactions";

export default function HorizontalRow({ id, category, name, type, amount }: Transactions) {
	return (
		<StyledLink href={`/transaction/${id}`} aria-label={`Got to ${name} transaction`}>
			<Icon icon={category} />
			<StyledParagraph>{name}</StyledParagraph>
			{type === "expense" ? <StyledData value={amount}>{formatAmount(amount)}</StyledData> : <StyledDataHighlighted value={amount}>{formatAmount(amount)}</StyledDataHighlighted>}
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	gap: var(--spacing-16);
	justify-content: space-between;
	border-radius: var(--spacing-8);
	padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-16);
`;
const StyledParagraph = styled.p`
	flex: 1;
	font: var(--font-regular-16);
`;
const StyledData = styled.data`
	font: var(--font-medium-16);
`;
const StyledDataHighlighted = styled(StyledData)`
	padding: var(--spacing-4);
	color: var(--color-gray-100);
	border-radius: var(--spacing-4);
	background-color: var(--color-green-100);
`;
