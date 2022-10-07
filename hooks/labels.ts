import { useQuery } from "react-query";
import type * as LabelsJson from "../public/data/labels.json";

export type LabelNames = keyof typeof LabelsJson;
export type Labels<TLabels extends LabelNames> = Record<TLabels, string>;

async function getLabels() {
	const response = await fetch(`/data/labels.json`, {
		headers: {
			'Accept': 'application/json',
		},
	});
	if (!response.ok) throw new Error("Error loading labels");
	try {
		return response.json() as Promise<Record<string, string>>;
	} catch(e: any) {
		throw new Error(`Error parsing JSON file. ${e.message || e.name || e || ""}`)
	}
}

/** Object that returns empty string instead of undefined for unknown props */
const emptyValue = new Proxy({}, {
	get: () => "",
});

export function useLabels<TLabels extends LabelNames>(labels: TLabels[]): [Labels<TLabels>, boolean] {
	const { isFetching, data } = useQuery('labels', getLabels, { staleTime: Infinity, refetchOnWindowFocus: false, refetchOnMount: false })
	return [data || emptyValue, isFetching] as any;
}
