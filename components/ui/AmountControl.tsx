import { useRef } from "react";
import styled from "styled-components";
import PillButton from "@/components/ui/PillButton";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function AmountControl({ showError }: { showError: boolean }) {
	const inputRef = useRef<HTMLInputElement>(null);

	function handleAmountSelect(amount: number) {
		if (inputRef.current) inputRef.current.value = `${amount}.00`;
	}

	return (
		<>
			<StyledInputDiv>
				<StyledLabel htmlFor="amount">Amount</StyledLabel>
				<StyledInput $showError={showError} id="amount" type="text" name="amount" placeholder="0.00" aria-describedby={showError ? "amount-error" : ""} aria-invalid={showError} ref={inputRef} />
				{showError && <ErrorMessage id="amount-error" message="Please enter a valid number" />}
			</StyledInputDiv>
			<StyledPillDiv>
				<PillButton onClick={() => handleAmountSelect(50)} label="$50" />
				<PillButton onClick={() => handleAmountSelect(100)} label="$100" />
				<PillButton onClick={() => handleAmountSelect(500)} label="$500" />
			</StyledPillDiv>
		</>
	);
}

const StyledInputDiv = styled.div`
	display: flex;
	flex-direction: column;
`;
const StyledLabel = styled.label`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
`;
const StyledInput = styled.input<{ $showError: boolean }>`
	font: var(--font-medium-40);

	&:focus-visible {
		outline: none;
	}

	&::placeholder {
		color: ${(props) => (props.$showError ? "var(--color-red-90)" : "var(--color-gray-50)")};
	}
`;
const StyledPillDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;
