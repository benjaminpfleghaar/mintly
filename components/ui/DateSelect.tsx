"use client";

import styled from "styled-components";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function DateSelect() {
	return (
		<StyledDiv>
			<StyledSpan id="date">Date</StyledSpan>
			<StyledFieldset aria-labelledby="date">
				<StyledSelect name="day" aria-label="Day" defaultValue="Day" aria-describedby="date-error" aria-invalid="true">
					<option disabled>Day</option>
					<option>1</option>
				</StyledSelect>
				<StyledSelect name="month" aria-label="Month" defaultValue="Month" aria-describedby="date-error" aria-invalid="true">
					<option disabled>Month</option>
					<option>1</option>
				</StyledSelect>
				<StyledSelect name="year" aria-label="Year" defaultValue="Year" aria-describedby="date-error" aria-invalid="true">
					<option disabled>Year</option>
					<option>1</option>
				</StyledSelect>
			</StyledFieldset>
			<ErrorMessage id="date-error" message="Please select a date" />
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
const StyledSelect = styled.select`
	flex-grow: 1;
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
	background: url("/images/Down.svg") center right 14px / 20px 20px no-repeat;
`;