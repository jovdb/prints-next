import create from "zustand";
import shallow from "zustand/shallow";
import { printsStore, IPrintsStore, getPrint, getPrints } from "../store/prints";
import { Prints } from "../types";

export const usePrintsStore = create(printsStore);

const printsSelector = (state: IPrintsStore) => state.prints;
const resetSelector = (state: IPrintsStore) => state.reset;

export function usePrints() {
	const prints = usePrintsStore(printsSelector);
	const reset = usePrintsStore(resetSelector);
	return [prints,	reset] as [prints: Prints, setPrints: (prints: Prints) => void];
}


export function usePrint(printId: string | undefined) {
	const prints = usePrintsStore(printsSelector)
	return getPrint(prints, printId);
}

const printsActionsSelector = (state: IPrintsStore) => ({
	reset: state.reset,
	addPrint: state.addPrint,
	updatePrint: state.updatePrint,
	removePrint: state.removePrint,
});

export function usePrintsActions() {
	return usePrintsStore(printsActionsSelector, shallow);
}
