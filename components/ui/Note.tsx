import Image from "next/image";
import styled from "styled-components";

export default function Note() {
	return (
		<StyledParagraph>
			<Image src="/images/Alert.svg" width={20} height={20} alt="" />
			Deleting a transaction cannot be undone. Are you sure?
		</StyledParagraph>
	);
}

const StyledParagraph = styled.p`
	display: flex;
	align-items: center;
	gap: var(--spacing-12);
	color: var(--color-red-90);
	padding: var(--spacing-16);
	font: var(--font-regular-12);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-red-40);
	background-color: var(--color-red-10);
`;
