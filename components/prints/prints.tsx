import { usePhotos } from "../../hooks/photos";
import { usePrints, usePrintsActions } from "../../hooks/prints";
import { PrintItem } from "../print-item";

export const Prints = () => {
	const editingPrintId = undefined;
	const [prints] = usePrints();
	const [photos] = usePhotos();
	const { updatePrint } = usePrintsActions();
	if (editingPrintId) return null;

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
						onSetQuantity={(quantity) => updatePrint(print.printId, { ...print, quantity })}
						onEditClicked={() => alert("Select " + print.printId)}
					/>
				);
			})}
		</>
	);
};
Prints.displayName = "Prints";
