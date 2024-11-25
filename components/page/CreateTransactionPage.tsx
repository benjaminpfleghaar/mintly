"use client";

import styled from "styled-components";
import Header from "@/components/layout/Header";
import { LinkIconProps } from "@/types/LinkIconProps";
import TransactionForm from "@/components/layout/TransactionForm";

export default function CreateTransactionPage() {
	const iconOnLeftSide: LinkIconProps = {
		icon: "Back",
		label: "Back to transactions",
		href: "/",
	};

	return (
		<>
			<Header title="Create transaction" iconOnLeftSide={iconOnLeftSide} />
			<StyledMain>
				<TransactionForm />
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
