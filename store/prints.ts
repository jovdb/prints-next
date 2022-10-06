import create from "zustand/vanilla";

import type { IPrint, Prints } from "../types";

export interface IPrintsStore {
	prints: Prints;
	reset(prints?: Prints): void;
	addPrint(print: IPrint): void;
	removePrint(printId: string): void;
	updatePrint(printId: string, newPrint: IPrint): void;
}

// Vanilla zustand store
export let printsStore = create<IPrintsStore>(
	(set, get) => ({
		prints: {},

		reset(prints = {}) {
			set({ prints });
		},

		addPrint(print) {
			set(({prints}) => ({
				prints: {
					...prints,
					[print.printId]: print,
				}
			}));
		},

		removePrint(printId) {
			set(({prints}) => {
				const { [printId]: _, ...rest } = prints;
				return {
					prints: rest,
				};
			});
		},

		updatePrint(printId, newPrint) {
			set(({prints}) => ({
				prints: {
					...prints,
					[printId]: newPrint,
				},
			}));
		},
	})
);


// Selectors
export function getTotalPrice(prints: readonly IPrint[]) {
	return prints
		.reduce((prev, print) => prev + print.quantity * 0.5, 0);
};


export function getPrints(prints: Prints) {
	return Object.values(prints); // could be later sorted
};

export function getPrint(prints: Prints, printId: string | undefined) {
	if (!printId) return undefined;
	return prints[printId];
};
