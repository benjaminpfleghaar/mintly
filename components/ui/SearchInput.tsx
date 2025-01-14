import Image from "next/image";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();
	const searchInput = useRef<HTMLInputElement>(null);
	const [showCancelButton, setShowCancelButton] = useState(false);

	const handleDebounce = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("search", term);
		} else {
			params.delete("search");
		}

		replace(`${pathname}?${params.toString()}`);
	}, 300);

	function handleSearch(term: string) {
		if (term) {
			setShowCancelButton(true);
		} else {
			setShowCancelButton(false);
		}

		handleDebounce(term);
	}

	function handleReset() {
		if (searchInput.current) searchInput.current.value = "";
		setShowCancelButton(false);
		replace(`${pathname}`);
	}

	return (
		<StyledDiv>
			{showCancelButton && (
				<StyledButton onClick={handleReset} aria-label="Reset search">
					<Image src={`/images/cancel.svg`} width={20} height={20} alt="" />
				</StyledButton>
			)}
			<StyledInput type="text" ref={searchInput} defaultValue={searchParams.get("search")?.toString()} onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
`;
const StyledButton = styled.button`
	display: flex;
	position: absolute;
	align-items: center;
	top: var(--spacing-12);
	justify-content: center;
	right: var(--spacing-12);
	width: var(--spacing-24);
	height: var(--spacing-24);
	border-radius: var(--spacing-12);
`;
const StyledInput = styled.input`
	height: var(--spacing-48);
	font: var(--font-regular-14);
	padding-left: var(--spacing-40);
	border-radius: var(--spacing-8);
	border: 1px solid var(--color-gray-80);
	background: url("/images/Search.svg") center left 14px / 20px 20px no-repeat;

	&::placeholder {
		color: var(--color-gray-50);
	}
`;
