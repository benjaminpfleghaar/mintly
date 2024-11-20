"use client";

import Link from "next/link";
import styled from "styled-components";

export default function ButtonLink({ href, label }: { href: string; label: string }) {
	return <StyledLink href={href}>{label}</StyledLink>;
}

const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	height: var(--spacing-48);
	color: var(--color-gray-0);
	font: var(--font-medium-14);
	padding: 0 var(--spacing-24);
	border-radius: var(--spacing-8);
	background-color: var(--color-gray-90);
	border: 1px solid var(--color-gray-80);
`;
