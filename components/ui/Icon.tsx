import Image from "next/image";
import styled from "styled-components";

export default function Icon({ icon }: { icon: string }) {
	return (
		<StyledSpan aria-hidden="true">
			<Image src={`/images/${icon}.svg`} width={20} height={20} alt="" data-testid="icon" />
		</StyledSpan>
	);
}

const StyledSpan = styled.span`
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	width: var(--spacing-40);
	height: var(--spacing-40);
	background-color: var(--color-gray-90);
`;
