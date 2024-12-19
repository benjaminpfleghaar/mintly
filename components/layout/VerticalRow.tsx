import styled from "styled-components";
import Icon from "@/components/ui/Icon";

export default function VerticalRow({ icon, title, value }: { icon: string; title: string; value: string }) {
	return (
		<StyledDiv>
			<Icon icon={icon} />
			<div>
				<StyledHeadline>{title}</StyledHeadline>
				<StyledParagraph>{value}</StyledParagraph>
			</div>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	gap: var(--spacing-16);
	border-radius: var(--spacing-8);
	padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-16);
`;
const StyledHeadline = styled.h3`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
	margin-bottom: var(--spacing-4);
`;
const StyledParagraph = styled.p`
	font: var(--font-regular-16);
`;
