import { PropsWithChildren } from "react";
import styles from "./bottom-menu.module.css";

export function BottomMenu({ children }: PropsWithChildren) {
	return (
		<div className={styles["bottom-menu"]}>
			{children}
		</div>
	);
}

export function BottomMenuButton({ children }: PropsWithChildren) {
	return (
		<button className={styles["bottom-menu__button"]}>
			{children}
		</button>
	);
}
