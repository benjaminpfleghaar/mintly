"use client";

import styled from "styled-components";

export default function OutlineButton({ onClick, label }: { onClick: () => void; label: string }) {
	return (
		<StyledButton type="button" onClick={onClick}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button`
	height: var(--spacing-48);
	font: var(--font-medium-14);
	padding: 0 var(--spacing-24);
	border-radius: var(--spacing-8);
	background-color: var(--color-gray-90);
	border: 1px solid var(--color-gray-80);
`;
