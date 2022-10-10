import { useRouter } from "next/router";

/** Get/set print ID editing based from URL hash */
export function useEditPrintId() {
	const router = useRouter();
	const regExResult = (/#\/edit\/(.+)/gi).exec(router.asPath); // This won't trigger a rerende when adjusting the user without a refresh
	return [
		(regExResult || [])[1] || "",
		(editPrintId: string | undefined) => {
			if (editPrintId) {
				router.push({ hash: `/edit/${editPrintId}`, query: router.query });
			} else {
				// router.back();
				router.push({ hash: "", query: router.query});
			}
		}
	] as const;
}