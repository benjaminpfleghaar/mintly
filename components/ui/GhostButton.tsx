import styled from "styled-components";

export default function GhostButton({ onClick, label, color }: { onClick: () => void; label: string; color?: string }) {
	return (
		<StyledButton $color={color} type="button" onClick={onClick}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button<{ $color?: string }>`
	height: var(--spacing-48);
	font: var(--font-medium-14);
	padding: 0 var(--spacing-24);
	border-radius: var(--spacing-8);
	color: ${(props) => (props.$color === "red" ? "var(--color-red-90)" : "inherit")};
`;
