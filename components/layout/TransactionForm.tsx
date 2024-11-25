"use client";

import styled from "styled-components";
import TypeRadio from "@/components/ui/TypeRadio";
import NameInput from "@/components/ui/NameInput";
import DateInput from "@/components/ui/DateInput";
import GhostButton from "@/components/ui/GhostButton";
import SubmitButton from "@/components/ui/SubmitButton";
import CategorySelect from "@/components/ui/CategorySelect";
import AmountInputLarge from "@/components/ui/AmountInputLarge";

export default function TransactionForm() {
	return (
		<StyledForm>
			<AmountInputLarge />
			<NameInput />
			<CategorySelect />
			<TypeRadio />
			<DateInput />
			<StyledDiv>
				<SubmitButton onClick={() => console.log("Clicked")} label="Save" />
				<GhostButton onClick={() => console.log("Clicked")} label="Cancel" />
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
