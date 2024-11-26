"use client";

import styled from "styled-components";
import { categories } from "@/data/categories";

export default function CategorySelect({ value }: { value?: string }) {
	return (
		<StyledDiv>
			<StyledLabel htmlFor="category">Category</StyledLabel>
			<StyledSelect name="category" id="category" defaultValue={value}>
				<option disabled>Please select a category</option>
				{categories.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</StyledSelect>
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
const StyledSelect = styled.select`
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
	background: url("/images/Down.svg") center right 14px / 20px 20px no-repeat;
`;
