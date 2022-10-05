import styles from "./logo.module.css";

export const Logo = () => (
	<div className={styles.logo}>
		<img src={"./logo.svg"} alt="Logo"/>
	</div>
);
Logo.displayName = "Logo";
