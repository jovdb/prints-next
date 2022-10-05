import React, { ReactNode } from "react";

import styles from './header.module.css'

export const Header = ({ children }: React.PropsWithChildren) => (
	<header className={styles.header}>
		{ children }
	</header>
);
Header.displayName = "Header";

export const HeaderLeft = ({ children }: React.PropsWithChildren) => (
	<div className={styles.header__left}>
		{children}
	</div>
);

export const HeaderRight = ({ children }: React.PropsWithChildren) => (
	<div className={styles.header__right}>
		{children}
	</div>
);