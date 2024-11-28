"use client";

import { nanoid } from "nanoid";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import TypeRadio from "@/components/ui/TypeRadio";
import NameInput from "@/components/ui/NameInput";
import DateSelect from "@/components/ui/DateSelect";
import GhostButton from "@/components/ui/GhostButton";
import SubmitButton from "@/components/ui/SubmitButton";
import AmountControl from "@/components/ui/AmountControl";
import { useTransactions } from "@/states/useTransactions";
import CategorySelect from "@/components/ui/CategorySelect";

export default function TransactionForm() {
	const router = useRouter();
	const { addTransaction } = useTransactions();

	function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const { amount, name, category, type, day, month, year } = Object.fromEntries(data);

		if (isNaN(parseFloat(amount as string))) {
			console.error("Invalid amount:", amount);
			return;
		}

		const transaction = {
			name: name as string,
			type: type as string,
			id: nanoid().toString(),
			category: category as string,
			date: `${year}-${month}-${day}`,
			amount: parseFloat((type === "Expense" ? -amount : amount) as string),
		};

		addTransaction(transaction);
		router.push("/");
	}

	return (
		<StyledForm onSubmit={handleFormSubmit}>
			<AmountControl />
			<NameInput />
			<CategorySelect />
			<TypeRadio />
			<DateSelect />
			<StyledDiv>
				<SubmitButton label="Save" />
				<GhostButton onClick={() => router.push("/")} label="Cancel" />
			</StyledDiv>
		</StyledForm>
	);
}

const StyledForm = styled.form`
	display: flex;
	gap: var(--spacing-16);
	flex-direction: column;
`;
const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
	margin-top: var(--spacing-8);
`;
