import { useLabels } from "../../hooks/labels";
import { usePhotos } from "../../hooks/photos";
import { usePrints, usePrintsActions } from "../../hooks/prints";
import { useEditPrintId } from "../../hooks/router";
import { PrintItem } from "../print-item";

export const Prints = () => {
	const [editPrintId, setEditPrintId] = useEditPrintId();
	const [prints] = usePrints();
	const [photos] = usePhotos();
	const { updatePrint } = usePrintsActions();
	const [labels] = useLabels(["Label.Quantity"]);

	if (editPrintId) return null;

	return (
		<>
			{Object.values(prints).map((print) => {
				const photo = photos[print.photoId];
				if (!photo) return null;
				return (
					<PrintItem
						key={print.printId}
						photo={photo}
						print={print}
						labels={labels}
						onSetQuantity={(quantity) => updatePrint(print.printId, { ...print, quantity })}
						onEditClicked={() => setEditPrintId(print.printId)}
					/>
				);
			})}
		</>
	);
};
Prints.displayName = "Prints";
