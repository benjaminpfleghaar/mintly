"use client";

import styled from "styled-components";
import Header from "@/components/layout/Header";
import Status from "@/components/layout/Status";
import { IconLinkProps } from "@/types/IconLinkProps";

export default function NotFound() {
	const iconOnLeftSide: IconLinkProps = {
		icon: "Back",
		label: "Back to transactions",
		href: "/",
	};

	return (
		<>
			<Header title="Not found" iconOnLeftSide={iconOnLeftSide} />
			<StyledMain>
				<Status type="notFound" />
			</StyledMain>
		</>
	);
}

const StyledMain = styled.main`
	display: flex;
	margin-inline: auto;
	flex-direction: column;
	gap: var(--spacing-24);
	padding: var(--spacing-40) 0;
	margin-top: var(--spacing-64);
	width: min(640px, 100% - var(--spacing-32));
	min-height: calc(100dvh - var(--spacing-64));
`;
