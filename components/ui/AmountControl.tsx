"use client";

import styled from "styled-components";
import PillButton from "@/components/ui/PillButton";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function AmountControl() {
	return (
		<>
			<StyledInputDiv>
				<StyledLabel htmlFor="amount">Amount</StyledLabel>
				<StyledInput id="amount" type="text" name="amount" placeholder="0.00" aria-describedby="amount-error" aria-invalid="true" />
				<ErrorMessage id="amount-error" message="Please enter a valid number" />
			</StyledInputDiv>
			<StyledPillDiv>
				<PillButton onClick={() => console.log("$50")} label="$50" />
				<PillButton onClick={() => console.log("$100")} label="$100" />
				<PillButton onClick={() => console.log("$500")} label="$500" />
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
const StyledInput = styled.input`
	font: var(--font-medium-40);

	&:focus-visible {
		outline: none;
	}

	&::placeholder {
		color: var(--color-gray-50);
	}
`;
const StyledPillDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;