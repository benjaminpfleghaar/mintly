"use client";

import styled from "styled-components";

export default function PillButton({ onClick, label }: { onClick: () => void; label: string }) {
	return (
		<StyledButton type="button" onClick={onClick}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	display: flex;
	align-items: center;
	height: var(--spacing-32);
	font: var(--font-medium-12);
	padding: 0 var(--spacing-16);
	border-radius: var(--spacing-16);
	background-color: var(--color-gray-90);
`;
