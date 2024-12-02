import styled from "styled-components";
import { parseDate } from "@/lib/utils";

export default function DateSelect({ value }: { value?: string }) {
	const { day, month, year } = parseDate(value);

	const days = Array.from({ length: 31 }).map((_, index) => index + 1);
	const months = Array.from({ length: 12 }).map((_, index) => index + 1);
	const years = Array.from({ length: 10 }).map((_, index) => 2024 - index);

	return (
		<StyledDiv>
			<StyledSpan id="date">Date</StyledSpan>
			<StyledFieldset aria-labelledby="date">
				<StyledSelect name="day" aria-label="Day" defaultValue={day}>
					<option disabled>Please select a day</option>
					{days.map((day) => (
						<option key={day}>{day}</option>
					))}
				</StyledSelect>
				<StyledSelect name="month" aria-label="Month" defaultValue={month}>
					<option disabled>Please select a month</option>
					{months.map((month) => (
						<option key={month}>{month}</option>
					))}
				</StyledSelect>
				<StyledSelect name="year" aria-label="Year" defaultValue={year}>
					<option disabled>Please select a year</option>
					{years.map((year) => (
						<option key={year}>{year}</option>
					))}
				</StyledSelect>
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
const StyledSelect = styled.select`
	width: 100%;
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
	background: url("/images/Down.svg") center right 14px / 20px 20px no-repeat;
`;
