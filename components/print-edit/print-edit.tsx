import { Labels } from "../../hooks/labels";
import { IPhoto, IPrint } from "../../types";
import styles from "./print-edit.module.css";

export const PrintEdit = ({
	print,
	photo,
	labels,
	onClose,
}: {
	print: IPrint;
	photo: IPhoto;
	labels: Labels<"Label.PrintsEdit.Back">;
	onClose: () => void;
}) => {
	return (
		<>
			<button onClick={() => { onClose(); }}>{labels["Label.PrintsEdit.Back"]}</button>
			<div className={styles["print-edit"]}>
				<img src={photo.url} alt={photo.fileName} />
			</div>
		</>
	);
};
PrintEdit.displayName = "PrintEdit";
