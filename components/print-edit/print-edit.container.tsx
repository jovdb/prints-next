import { useLabels } from "../../hooks/labels";
import { usePhoto } from "../../hooks/photos";
import { usePrint } from "../../hooks/prints";
import { useEditPrintId } from "../../hooks/router";
import { PrintEdit } from "./print-edit";

export const PrintEditContainer = () => {
	const [editPrintId, setEditPrintId] = useEditPrintId();
	const print = usePrint(editPrintId);
	const photo = usePhoto(print?.photoId);
	const [labels] = useLabels(["Label.PrintsEdit.Back"]);

	if (!editPrintId || !print || !photo) return null;

	return (
		<PrintEdit
			photo={photo}
			print={print}
			labels={labels}
			onClose={() => { setEditPrintId(undefined); }}
		/>
	);
};
PrintEditContainer.displayName = "PrintEditContainer";
