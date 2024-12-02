import styled from "styled-components";
import { formatDate } from "@/lib/utils";

export default function Table({ date, children }: { date?: string; children: React.ReactNode }) {
	return (
		<>
			{date && (
				<StyledHeadline>
					<time dateTime={date}>{formatDate(date)}</time>
				</StyledHeadline>
			)}
			<StyledList>{children}</StyledList>
		</>
	);
}

const StyledHeadline = styled.h3`
	color: var(--color-gray-50);
	font: var(--font-regular-12);
	margin-bottom: var(--spacing-8);
`;
const StyledList = styled.ul`
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
`;
