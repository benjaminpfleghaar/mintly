"use client";

import Image from "next/image";
import styled from "styled-components";

export default function ErrorMessage() {
	return (
		<StyledSpan>
			<Image src="/images/Alert.svg" width={20} height={20} alt="" />
			This field can&apos;t be empty
		</StyledSpan>
	);
}

const StyledSpan = styled.span`
	display: flex;
	align-items: center;
	gap: var(--spacing-4);
	color: var(--color-red-90);
	font: var(--font-regular-12);
`;
