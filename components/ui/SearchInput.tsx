import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
	const pathname = usePathname();
	const { replace } = useRouter();
	const searchParams = useSearchParams();

	const handleSearch = useDebouncedCallback((term) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("search", term);
		} else {
			params.delete("search");
		}

		replace(`${pathname}?${params.toString()}`);
	}, 300);

	return <input type="text" defaultValue={searchParams.get("search")?.toString()} onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." />;
}
