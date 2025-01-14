export default function Search({ query, setQuery }: { query: string; setQuery: React.Dispatch<React.SetStateAction<string>> }) {
	return <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." />;
}
