"use client";

import styled from "styled-components";
import TypeRadio from "@/components/ui/TypeRadio";
import NameInput from "@/components/ui/NameInput";
import DateSelect from "@/components/ui/DateSelect";
import GhostButton from "@/components/ui/GhostButton";
import SubmitButton from "@/components/ui/SubmitButton";
import AmountControl from "@/components/ui/AmountControl";
import CategorySelect from "@/components/ui/CategorySelect";

export default function TransactionForm() {
	return (
		<StyledForm>
			<AmountControl />
			<NameInput />
			<CategorySelect />
			<TypeRadio />
			<DateSelect />
			<StyledDiv>
				<SubmitButton onClick={() => console.log("Save")} label="Save" disabled />
				<GhostButton onClick={() => console.log("Cancel")} label="Cancel" />
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
