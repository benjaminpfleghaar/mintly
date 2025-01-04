import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";
import { useToast } from "@/states/useToast";

export default function ToastMessage() {
	const { toggleToast, toastMessage } = useToast();

	useEffect(() => {
		const countdown = setTimeout(() => {
			toggleToast();
		}, 3000);

		return () => {
			clearTimeout(countdown);
		};
	}, [toggleToast]);

	return (
		<StyledDiv>
			{toastMessage}
			<button type="button" aria-label="Close success message" onClick={() => toggleToast()}>
				<Image src="/images/Close.svg" width={20} height={20} alt="" />
			</button>
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	width: 320px;
	display: flex;
	position: fixed;
	align-items: center;
	right: var(--spacing-16);
	height: var(--spacing-48);
	bottom: var(--spacing-16);
	padding: 0 var(--spacing-16);
	font: var(--font-regular-12);
	justify-content: space-between;
	border-radius: var(--spacing-8);
	background-color: var(--color-blue-70);
`;
