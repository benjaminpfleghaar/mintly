import styled from "styled-components";
import Note from "@/components/ui/Note";
import { useRouter } from "next/navigation";
import { useToast } from "@/states/useToast";
import GhostButton from "@/components/ui/GhostButton";
import DeleteButton from "@/components/ui/DeleteButton";
import { useTransactions } from "@/states/useTransactions";

export default function DeleteDialog({ transactionId, toggleDelete }: { transactionId: string; toggleDelete: VoidFunction }) {
	const router = useRouter();
	const { toggleToast } = useToast();
	const { deleteTransaction } = useTransactions();

	function handleDelete() {
		deleteTransaction(transactionId);
		toggleToast("The transaction was successfully deleted.");
		router.push("/");
	}
	return (
		<StyledSection data-testid="delete-dialog">
			<Note />
			<StyledDiv>
				<DeleteButton onClick={handleDelete} label="Delete transaction" />
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
