import { IPhoto, IPrint } from "../../stores/store";
import styles from "./print-edit.module.css";

export const PrintEdit = ({
	print,
	photo,
	onClose,
}: {
	print: IPrint;
	photo: IPhoto;
	onClose: () => void;
}) => {
	return (
		<>
			<button onClick={() => { onClose(); }}>BACK</button>
			<div className={styles["print-edit"]}>
				<img src={photo.url} alt={photo.fileName} />
			</div>
		</>
	);
};
PrintEdit.displayName = "PrintEdit";
