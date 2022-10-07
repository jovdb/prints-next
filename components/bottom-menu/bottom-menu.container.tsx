import { useLabels } from "../../hooks/labels";
import { useEditPrintId } from "../../hooks/router";
import { BottomMenu, BottomMenuButton } from "./bottom-menu";

export const BottomMenuContainer = () => {
	const [editPrintId] = useEditPrintId();
	const [labels] = useLabels([
		"Label.PrintEdit.Format",
		"Label.PrintEdit.Effect",
		"Label.Prints.AdddPhotos",
	]);

	if (editPrintId) {
		return (
			<BottomMenu>
				<BottomMenuButton>
					{labels["Label.PrintEdit.Format"]}
				</BottomMenuButton>
				<BottomMenuButton>
					{labels["Label.PrintEdit.Effect"]}
				</BottomMenuButton>
			</BottomMenu>
		);
	}

	return (
		<BottomMenu>
			<BottomMenuButton>
				{labels["Label.Prints.AdddPhotos"]}
			</BottomMenuButton>
		</BottomMenu>
	);
};