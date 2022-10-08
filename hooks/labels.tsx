import { createContext, PropsWithChildren, useContext } from "react";
import { useQuery } from "react-query";

// ------
// Types
// ------
import type * as LabelsJson from "../public/data/labels.json";
export type LabelNames = keyof typeof LabelsJson;
export type Labels<TLabels extends LabelNames | "any" = "any"> = TLabels extends "any"
	? Partial<Record<LabelNames, string>>
	: Record<TLabels, string>

/* -------------- */
/* Labels Context */
/* -------------- */

const LabelsContext = createContext<Record<string, string> | undefined>({});

export function LabelsProvider({ children, labels }: PropsWithChildren<{labels: Record<string, string> | undefined}>) {
	return (
		<LabelsContext.Provider value={labels || {}}>
			{children}
		</LabelsContext.Provider>
	);
}

function useContextLabels() {
	return useContext(LabelsContext);
}


export async function getLabels() {
	const response = await fetch(`/data/labels.json`, {
		headers: {
			'Accept': 'application/json',
		},
	});
	if (!response.ok) throw new Error("Error loading labels");
	try {
		return response.json() as Promise<Labels>;
	} catch (e: any) {
		throw new Error(`Error parsing JSON file. ${e.message || e.name || e || ""}`)
	}
}

/**
 * Get labels
 * Can be used for server side (SSR or SSG) or client side 
 */
export function useLabels<TLabel extends LabelNames>(labels: TLabel[]): [{[T in TLabel]: string}, boolean] { // Didn't used Record<TLabel, string>, because {[]: string} has better intellisense
	const contextLabels = useContextLabels();
	
	// First check if labels are available in the context
	const fromContext: Record<string, string> = {};
	const labelsToFetch = contextLabels
		? labels.filter((label) => {
			const value = contextLabels[label];
			if (typeof value === "string") {
				fromContext[label] = value;
				return false;
			}
			return true;
		})
		: labels;

	// When server rendering needs labels, require them in the LabelsContext, so they don't need to be fetched at the client
	if (typeof window !== "undefined") {
		if (contextLabels) {
			if (labelsToFetch.length) {
				console.warn(`Not all server side labels are prefetched, missing labels in getStaticProps: ${labelsToFetch.join(", ")}`);
			}
		} else {
			console.warn(`Following labels could be prefetched: ${labelsToFetch.join(", ")}.\nExport a getStaticProps function in your page and return label values as props: { serverLabels: Record<key, value> } }.`);
		}
	}

	const { isFetching, data: newFetchedLabels } = useQuery(
		'labels',
		getLabels,
		{
			staleTime: Infinity,
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			enabled: labelsToFetch.length > 0
		},
	)
	return [
		{
			...fromContext,
			...newFetchedLabels,
		},
		isFetching,
	] as any;
}
