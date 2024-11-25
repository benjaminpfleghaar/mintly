import { Metadata } from "next";
import GlobalStyles from "@/styles/globals";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
	title: "Transactions",
	description: "Track, manage, and analyze your expenses and savings.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>
				<StyledComponentsRegistry>
					<GlobalStyles />
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
