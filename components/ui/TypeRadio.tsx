"use client";

import styled from "styled-components";

export default function TypeRadio({ value = "Income" }: { value?: string }) {
	return (
		<StyledDiv>
			<StyledSpan id="type">Type</StyledSpan>
			<StyledFieldset aria-labelledby="type">
				<StyledLabel htmlFor="income">
					Income
					<StyledInput id="income" type="radio" name="type" value="Income" defaultChecked={value === "Income"} />
				</StyledLabel>
				<StyledLabel htmlFor="expense">
					Expense
					<StyledInput id="expense" type="radio" name="type" value="Expense" defaultChecked={value === "Expense"} />
				</StyledLabel>
			</StyledFieldset>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledSpan = styled.span`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
`;
const StyledFieldset = styled.fieldset`
	border: none;
	display: flex;
	gap: var(--spacing-8);
`;
const StyledLabel = styled.label`
	flex-grow: 1;
	display: flex;
	align-items: center;
	height: var(--spacing-48);
	padding: 0 var(--spacing-16);
	font: var(--font-regular-14);
	justify-content: space-between;
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
`;
const StyledInput = styled.input`
	border-radius: 50%;
	width: var(--spacing-16);
	height: var(--spacing-16);
	border: 1px solid var(--color-gray-80);

	&:checked {
		border-color: var(--color-gray-0);
		background-color: var(--color-gray-0);
		box-shadow: inset 0 0 0 3px var(--color-gray-100);
	}
`;
