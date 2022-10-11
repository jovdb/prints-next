import { Labels } from "../../hooks/labels";
import { IPrint, IPhoto } from "../../types";
import { PlaceholderImage } from "../placeholder-image";
import styles from "./print-item.module.css";

export const PrintItem = ({
	print,
	photo,
	labels,
	onSetQuantity,
	onEditClicked,
}: {
	print: IPrint;
	photo: IPhoto;
	labels: Labels<"Label.Quantity">;
	onSetQuantity: (quantity: number) => void;
	onEditClicked: () => void;
}) => {
	return (
		<div className={styles["print-item"]}>
			<div className={styles["print-item__img"]}>{/* Create a Preview component */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<PlaceholderImage
					aspectRatio={(photo.width / photo.height)}
					loading="lazy"
					onClick={(e) => { onEditClicked(); e.preventDefault(); }}
					src={photo?.url}
					alt={photo.fileName}
				/>
			</div>
			<div className={styles["print-item__side"]}>
				<label htmlFor={"quantity_" + print.printId} >{labels["Label.Quantity"]}:</label>
				<input
					id={"quantity_" + print.printId}
					type="number"
					value={print.quantity}
					min="1"
					max="999"
					onChange={(e) => {
						onSetQuantity(parseInt(e.target.value, 10) || 1);
					}}
				/>
			</div>
		</div>
	);
};
PrintItem.displayName = "Price";
