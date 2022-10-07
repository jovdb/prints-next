import { useEditPrintId } from "../../hooks/router";
import { BottomMenu, BottomMenuButton } from "./bottom-menu";

export const BottomMenuContainer = () => {
	const [editPrintId] = useEditPrintId();

	if (editPrintId) {
		return (
			<BottomMenu>
				<BottomMenuButton>
					Format
				</BottomMenuButton>
				<BottomMenuButton>
					Transform
				</BottomMenuButton>
			</BottomMenu>
		);
	}

	return (
		<BottomMenu>
			<BottomMenuButton>
				Add foto&apos;s
			</BottomMenuButton>
		</BottomMenu>
	);
};