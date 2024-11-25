"use client";

import styled from "styled-components";

export default function DateInput() {
	return (
		<StyledDiv>
			<StyledLabel htmlFor="date">Date</StyledLabel>
			<StyledInput id="date" type="date" name="date" defaultValue="2024-11-25" />
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
	background: url("/images/Calendar.svg") center right 14px / 20px 20px no-repeat;

	&::-webkit-calendar-picker-indicator {
		filter: invert(100%);
	}
`;
