import styled from "styled-components";
export default function DeleteButton({ label }: { label: string }) {
	return <StyledButton type="button">{label}</StyledButton>;
}
const StyledButton = styled.button`
	height: var(--spacing-48);
	color: var(--color-gray-0);
	font: var(--font-medium-14);
	padding: 0 var(--spacing-24);
	border-radius: var(--spacing-8);
	background-color: var(--color-red-80);
`;
