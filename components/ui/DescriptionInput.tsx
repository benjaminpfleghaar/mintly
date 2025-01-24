import styled from "styled-components";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function DescriptionInput({ value, showError }: { value?: string; showError: boolean }) {
	return (
		<StyledDiv>
			<StyledLabel htmlFor="description">Description</StyledLabel>
			<StyledInput $showError={showError} id="description" type="text" name="description" defaultValue={value} placeholder="Please enter a description" aria-describedby={showError ? "description-error" : ""} aria-invalid={showError} />
			{showError && <ErrorMessage id="description-error" message="Please enter a valid description" />}
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
const StyledInput = styled.input<{ $showError: boolean }>`
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-16);
	border-radius: var(--spacing-8);
	border: 1px solid ${(props) => (props.$showError ? "var(--color-red-90)" : "var(--color-gray-80)")};

	&::placeholder {
		color: var(--color-gray-50);
	}
`;
