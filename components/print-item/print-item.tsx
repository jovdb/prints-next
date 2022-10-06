import { IPrint, IPhoto } from "../../types";
import styles from "./print-item.module.css";

export const PrintItem = ({
	print,
	photo,
	onSetQuantity,
	onEditClicked,
}: {
	print: IPrint;
	photo: IPhoto;
	onSetQuantity: (quantity: number) => void;
	onEditClicked: () => void;
}) => {
	return (
		<div className={styles["print-item"]}>
			<div className={styles["print-item__img"]}>{/* Create a Preview component */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					loading="lazy"
					onClick={(e) => { onEditClicked(); e.preventDefault(); }}
					src={photo?.url}
					alt={photo.fileName}
				/>
			</div>
			<div className={styles["print-item__side"]}>
				<label htmlFor={"quantity_" + print.printId} >Quanitiy:</label>
				<input
					id={"quantity_" + print.printId}
					type="number"
					value={print.quantity}
					min="1"
					max="999"
					onChange={(e) => {
						onSetQuantity(parseInt(e.target.value, 10));
					}}
				/>
			</div>
		</div>
	);
};
PrintItem.displayName = "Price";
