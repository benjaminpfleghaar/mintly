"use client";

import styled from "styled-components";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import ButtonLink from "@/components/ui/ButtonLink";

interface statusCasesProps {
	[key: string]: {
		icon: "Empty" | "Filter" | "Search";
		headline: string;
		paragraph: string;
		button?: React.ReactNode;
	};
}

const statusCases: statusCasesProps = {
	empty: {
		icon: "Empty",
		headline: "No transactions available",
		paragraph: "Start by adding a new one",
		button: <ButtonLink href="/" label="Create transaction" />,
	},
	search: {
		icon: "Search",
		headline: "No matches found",
		paragraph: "Try a different search term",
	},
	filter: {
		icon: "Filter",
		headline: "No transactions in this category",
		paragraph: "Try a different or reset your filter",
		button: <Button onClick={() => console.log("Clicked")} label="Reset filter" />,
	},
} as const;

export default function Status({ type }: { type: "empty" | "search" | "filter" }) {
	const status = statusCases[type];

	return (
		<StyledSection>
			<Icon icon={status.icon} />
			<StyledDiv>
				<StyledHeadline>{status.headline}</StyledHeadline>
				<StyledParagraph>{status.paragraph}</StyledParagraph>
			</StyledDiv>
			{status.button}
		</StyledSection>
	);
}

const StyledSection = styled.section`
	flex-grow: 1;
	display: flex;
	align-items: center;
	gap: var(--spacing-40);
	flex-direction: column;
	justify-content: center;
`;
const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	gap: var(--spacing-8);
	flex-direction: column;
`;
const StyledHeadline = styled.h3`
	font: var(--font-medium-16);
`;
const StyledParagraph = styled.p`
	color: var(--color-gray-50);
	font: var(--font-regular-14);
`;
