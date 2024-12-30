import styled from "styled-components";
import Note from "@/components/ui/Note";
import GhostButton from "@/components/ui/GhostButton";
import DeleteButton from "@/components/ui/DeleteButton";

export default function DeleteDialog({ toggleDelete }: { toggleDelete: VoidFunction }) {
	return (
		<StyledSection>
			<Note />
			<StyledDiv>
				<DeleteButton label="Delete transaction" />
				<GhostButton onClick={toggleDelete} label="Cancel" />
			</StyledDiv>
		</StyledSection>
	);
}

const StyledSection = styled.section`
	display: flex;
	gap: var(--spacing-16);
	flex-direction: column;
`;
const StyledDiv = styled.div`
	display: flex;
	gap: var(--spacing-8);
	flex-direction: column;
`;
