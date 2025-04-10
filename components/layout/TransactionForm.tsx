import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { useToast } from "@/states/useToast";
import { addLeadingZero } from "@/lib/utils";
import TypeRadio from "@/components/ui/TypeRadio";
import DateSelect from "@/components/ui/DateSelect";
import { notFound, useRouter } from "next/navigation";
import AmountInput from "@/components/ui/AmountInput";
import GhostButton from "@/components/ui/GhostButton";
import SubmitButton from "@/components/ui/SubmitButton";
import AmountControl from "@/components/ui/AmountControl";
import { useTransactions } from "@/states/useTransactions";
import CategorySelect from "@/components/ui/CategorySelect";
import DescriptionInput from "@/components/ui/DescriptionInput";

export default function TransactionForm({ id, mode }: { id?: string; mode: "create" | "edit" }) {
	const router = useRouter();
	const { toggleToast } = useToast();
	const [errors, setErrors] = useState<string[]>([]);
	const { transactions, addTransaction, updateTransaction } = useTransactions();
	const transaction = transactions.find((transaction) => transaction.id === id);

	function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const collectedErrors = [];

		const data = new FormData(event.currentTarget);
		const { amount, description, category, type, day, month, year } = Object.fromEntries(data);

		if (!amount || isNaN(parseFloat(amount as string))) collectedErrors.push("amount");
		if (!description) collectedErrors.push("description");

		if (collectedErrors.length !== 0) {
			setErrors([...collectedErrors]);
			return;
		}

		const castingAmount = amount as string;
		const replaceAmount = castingAmount.replace(",", ".");

		const transaction = {
			description: description as string,
			type: type as string,
			id: mode === "create" ? nanoid().toString() : id || "",
			category: category as string,
			date: `${year}-${addLeadingZero(month as string)}-${addLeadingZero(day as string)}`,
			amount: parseFloat((type === "Expense" ? -replaceAmount : replaceAmount) as string),
		};

		if (mode === "create") {
			addTransaction(transaction);
			toggleToast("Transaction successfully created.");
			router.push("/");
		}
		if (mode === "edit") {
			updateTransaction(transaction);
			toggleToast("Transaction successfully updated.");
			router.push(`/${id}`);
		}
	}

	if (!transaction && mode === "edit") notFound();

	const { description, amount, category, type, date } = transaction || {};

	if (mode === "create")
		return (
			<StyledForm onSubmit={handleFormSubmit}>
				<AmountControl showError={errors.includes("amount")} />
				<DescriptionInput showError={errors.includes("description")} />
				<CategorySelect />
				<TypeRadio />
				<DateSelect />
				<StyledDiv>
					<SubmitButton label="Save" />
					<GhostButton onClick={() => router.push("/")} label="Cancel" />
				</StyledDiv>
			</StyledForm>
		);
	if (mode === "edit")
		return (
			<StyledForm onSubmit={handleFormSubmit}>
				<AmountInput value={amount} showError={errors.includes("amount")} />
				<DescriptionInput value={description} showError={errors.includes("description")} />
				<CategorySelect value={category} />
				<TypeRadio value={type} />
				<DateSelect value={date} />
				<StyledDiv>
					<SubmitButton label="Save" />
					<GhostButton onClick={() => router.push(`/${id}`)} label="Cancel" />
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
