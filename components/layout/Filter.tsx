import styled from "styled-components";
import { categories } from "@/data/categories";
import PillButton from "@/components/ui/PillButton";

export default function Filter({ filter, handleFilter }: { filter: string; handleFilter: (category?: string) => void }) {
	return (
		<StyledDiv>
			<PillButton label="All" onClick={() => handleFilter()} active={filter === ""} />
			{categories.map((category) => (
				<PillButton key={category} label={category} onClick={() => handleFilter(category)} active={filter === category} />
			))}
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;
