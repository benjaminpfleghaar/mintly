import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useToast } from "@/states/useToast";
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
	const { toggleToast } = useToast();
	const { addTransaction } = useTransactions();
	const [errors, setErrors] = useState<string[]>([]);

	function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const collectedErrors = [];

		const data = new FormData(event.currentTarget);
		const { amount, name, category, type, day, month, year } = Object.fromEntries(data);

		if (!amount || isNaN(parseFloat(amount as string))) collectedErrors.push("amount");
		if (!name) collectedErrors.push("name");

		if (collectedErrors.length !== 0) {
			setErrors([...collectedErrors]);
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
		toggleToast();
		router.push("/");
	}

	return (
		<StyledForm onSubmit={handleFormSubmit}>
			<AmountControl showError={errors.includes("amount")} />
			<NameInput showError={errors.includes("name")} />
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
