"use client";

import Image from "next/image";
import styled from "styled-components";

export default function ErrorMessage({ id, message }: { id: string; message: string }) {
	return (
		<StyledSpan id={id} role="alert" data-testid={id}>
			<Image src="/images/Alert.svg" width={20} height={20} alt="" />
			{message}
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
