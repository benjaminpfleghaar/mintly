import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();
	const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
	const [showCancelButton, setShowCancelButton] = useState(!!searchTerm);

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
		setSearchTerm(term);
		setShowCancelButton(!!term);
		handleDebounce(term);
	}

	function handleReset() {
		setSearchTerm("");
		setShowCancelButton(false);
		replace(`${pathname}`);
	}

	return (
		<StyledSection>
			{showCancelButton && (
				<StyledButton onClick={handleReset} aria-label="Reset search">
					<Image src={`/images/Cancel.svg`} width={20} height={20} alt="" />
				</StyledButton>
			)}
			<StyledInput type="text" value={searchTerm} onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />
		</StyledSection>
	);
}

const StyledSection = styled.section`
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
