import styled from "styled-components";

export default function GhostButton({ onClick, label }: { onClick: () => void; label: string }) {
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
`;
