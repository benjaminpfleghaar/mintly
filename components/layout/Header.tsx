"use client";

import styled from "styled-components";
import IconLink from "@/components/ui/IconLink";
import { IconLinkProps } from "@/types/IconLinkProps";

interface HeaderProps {
	title: string;
	iconOnLeftSide?: IconLinkProps;
	iconOnRightSide?: IconLinkProps;
}

export default function Header({ title, iconOnLeftSide, iconOnRightSide }: HeaderProps) {
	return (
		<StyledHeader>
			<StyledNav>
				{iconOnLeftSide && <IconLink href={iconOnLeftSide.href} icon={iconOnLeftSide.icon} label={iconOnLeftSide.label} />}
				<StyledHeadline $iconOnLeftSide={iconOnLeftSide} $iconOnRightSide={iconOnRightSide}>
					{title}
				</StyledHeadline>
				{iconOnRightSide && <IconLink href={iconOnRightSide.href} icon={iconOnRightSide.icon} label={iconOnRightSide.label} />}
			</StyledNav>
		</StyledHeader>
	);
}

const StyledHeader = styled.header`
	top: 0;
	width: 100%;
	position: fixed;
	backdrop-filter: blur(var(--spacing-8));
	background-color: rgba(22, 22, 22, 0.75);
	border-bottom: 1px solid var(--color-gray-80);
	-webkit-backdrop-filter: blur(var(--spacing-8));
`;
const StyledNav = styled.nav`
	display: flex;
	align-items: center;
	margin-inline: auto;
	padding: var(--spacing-16) 0;
	justify-content: space-between;
	width: min(640px, 100% - var(--spacing-32));
`;
const StyledHeadline = styled.h1<{ $iconOnLeftSide?: object; $iconOnRightSide?: object }>`
	flex: 1;
	text-align: center;
	font: var(--font-medium-16);
	padding-left: ${(props) => (props.$iconOnLeftSide ? "0" : "var(--spacing-32)")};
	padding-right: ${(props) => (props.$iconOnRightSide ? "0" : "var(--spacing-32)")};
`;
