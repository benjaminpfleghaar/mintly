"use client";

import styled from "styled-components";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function NameInput({ defaultValue }: { defaultValue?: string }) {
	return (
		<StyledDiv>
			<StyledLabel htmlFor="name">Name</StyledLabel>
			<StyledInput id="name" type="text" name="name" defaultValue={defaultValue} placeholder="Please enter a name" />
			<ErrorMessage />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledLabel = styled.label`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
`;
const StyledInput = styled.input`
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);

	&::placeholder {
		color: var(--color-gray-50);
	}
`;