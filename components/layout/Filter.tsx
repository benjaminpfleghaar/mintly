import styled from "styled-components";
import PillButton from "@/components/ui/PillButton";

export default function Filter() {
	return (
		<StyledDiv>
			<PillButton label="All" onClick={() => {}} active />
			<PillButton label="Education" onClick={() => {}} />
			<PillButton label="Entertainment" onClick={() => {}} />
			<PillButton label="Groceries" onClick={() => {}} />
		</StyledDiv>
	);
}

const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;
