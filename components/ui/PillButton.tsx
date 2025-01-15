import styled from "styled-components";

export default function PillButton({ onClick, label, active }: { onClick: () => void; label: string; active?: boolean }) {
	return (
		<StyledButton type="button" onClick={onClick} $active={active} aria-current={active}>
			{label}
		</StyledButton>
	);
}

const StyledButton = styled.button<{ $active?: boolean }>`
	display: flex;
	align-items: center;
	height: var(--spacing-32);
	font: var(--font-medium-12);
	padding: 0 var(--spacing-16);
	border-radius: var(--spacing-16);
	color: ${(props) => (props.$active ? "var(--color-gray-100)" : "var(--color-gray-0)")};
	background-color: ${(props) => (props.$active ? "var(--color-gray-0)" : "var(--color-gray-90)")};
`;
