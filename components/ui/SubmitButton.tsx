"use client";

import styled from "styled-components";

export default function SubmitButton({ onClick, label }: { onClick: () => void; label: string }) {
	return (
		<StyledButton type="submit" onClick={onClick}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	height: var(--spacing-48);
	font: var(--font-medium-14);
	color: var(--color-gray-100);
	padding: 0 var(--spacing-24);
	border-radius: var(--spacing-8);
	background-color: var(--color-gray-0);
`;