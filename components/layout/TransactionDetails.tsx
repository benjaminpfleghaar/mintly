import styled from "styled-components";
import Icon from "@/components/ui/Icon";
import { formatDate } from "@/lib/utils";

export default function TransactionDetails({ category, date, type }: { category: string; date: string; type: string }) {
	return (
		<StyledList>
			<StyledListItem>
				<Icon icon={category} />
				<div>
					<StyledHeadline>Category</StyledHeadline>
					<StyledParagraph>{category}</StyledParagraph>
				</div>
			</StyledListItem>
			<StyledListItem>
				<Icon icon="Card" />
				<div>
					<StyledHeadline>Card</StyledHeadline>
					<StyledParagraph>•••• •••• •••• 5436</StyledParagraph>
				</div>
			</StyledListItem>
			<StyledListItem>
				<Icon icon="Calendar" />
				<div>
					<StyledHeadline>Date</StyledHeadline>
					<StyledTime dateTime={date}>{formatDate(date)}</StyledTime>
				</div>
			</StyledListItem>
			<StyledListItem>
				<Icon icon={type} />
				<div>
					<StyledHeadline>Type</StyledHeadline>
					<StyledParagraph>{type}</StyledParagraph>
				</div>
			</StyledListItem>
		</StyledList>
	);
}

const StyledList = styled.ul`
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
`;
const StyledListItem = styled.li`
	display: flex;
	align-items: center;
	gap: var(--spacing-16);
	border-radius: var(--spacing-8);
	border-bottom: 1px solid var(--color-gray-80);
	padding: var(--spacing-16) var(--spacing-24) var(--spacing-16) var(--spacing-16);

	&:last-child {
		border: none;
	}
`;
const StyledHeadline = styled.h3`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
	margin-bottom: var(--spacing-4);
`;
const StyledParagraph = styled.p`
	font: var(--font-regular-16);
`;
const StyledTime = styled.time`
	font: var(--font-regular-16);
`;
