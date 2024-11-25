"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { LinkIconProps } from "@/types/LinkIconProps";

export default function LinkIcon({ href, icon, label }: LinkIconProps) {
	return (
		<StyledLink href={href} aria-label={label}>
			<Image src={`/images/${icon}.svg`} width={20} height={20} alt="" />
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	width: var(--spacing-32);
	height: var(--spacing-32);
	background-color: var(--color-gray-90);
`;
