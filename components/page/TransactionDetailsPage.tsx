"use client";

import { useState } from "react";
import styled from "styled-components";
import { notFound } from "next/navigation";
import { formatAmount } from "@/lib/utils";
import { useToast } from "@/states/useToast";
import Header from "@/components/layout/Header";
import { IconLinkProps } from "@/types/IconLinkProps";
import GhostButton from "@/components/ui/GhostButton";
import ToastMessage from "@/components/ui/ToastMessage";
import { useTransactions } from "@/states/useTransactions";
import DeleteDialog from "@/components/layout/DeleteDialog";
import TransactionDetails from "@/components/layout/TransactionDetails";

export default function TransactionDetailsPage({ id }: { id: string }) {
	const { showToast } = useToast();
	const { transactions } = useTransactions();
	const [toggleDelete, setToggleDelete] = useState(false);
	const transaction = transactions.find((transaction) => transaction.id === id);

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

	if (!transaction && toggleDelete) return null;
	if (!transaction) notFound();

	const { description, amount, category, type, date } = transaction;

	return (
		<>
			{showToast && <ToastMessage />}
			<Header title={description} iconOnLeftSide={iconOnLeftSide} iconOnRightSide={iconOnRightSide} />
			<StyledMain>
				<StyledSection>
					<StyledHeadline>Amount</StyledHeadline>
					<StyledData value={amount}>{formatAmount(amount)}</StyledData>
				</StyledSection>
				<TransactionDetails category={category} date={date} type={type} />
				{toggleDelete ? <DeleteDialog transactionId={id} toggleDelete={() => setToggleDelete(false)} /> : <GhostButton onClick={() => setToggleDelete(true)} label="Delete transaction" color="red" />}
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
