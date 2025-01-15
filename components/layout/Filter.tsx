import styled from "styled-components";
import { categories } from "@/data/categories";
import PillButton from "@/components/ui/PillButton";
import useEmblaCarousel from "embla-carousel-react";

export default function Filter({ filter, handleFilter }: { filter: string; handleFilter: (category?: string) => void }) {
	const [emblaRef] = useEmblaCarousel({ dragFree: true });

	return (
		<StyledFilter data-testid="filter">
			<StyledGradient></StyledGradient>
			<StyledEmbla ref={emblaRef}>
				<StyledEmblaContainer>
					<StyledEmblaSlide>
						<PillButton label="All" onClick={() => handleFilter()} active={filter === ""} />
					</StyledEmblaSlide>
					{categories.map((category) => (
						<StyledEmblaSlide key={category}>
							<PillButton label={category} onClick={() => handleFilter(category)} active={filter === category} />
						</StyledEmblaSlide>
					))}
				</StyledEmblaContainer>
			</StyledEmbla>
		</StyledFilter>
	);
}

const StyledFilter = styled.div`
	position: relative;
`;
const StyledGradient = styled.div`
	right: 0;
	z-index: 1;
	width: 32px;
	height: 32px;
	position: absolute;
	background: linear-gradient(to right, rgba(22, 22, 22, 0), rgb(22, 22, 22));
`;
const StyledEmbla = styled.div`
	overflow: hidden;
`;
const StyledEmblaContainer = styled.div`
	display: flex;
	gap: var(--spacing-8);
`;
const StyledEmblaSlide = styled.div`
	min-width: 0;
	flex: 0 0 auto;
`;
