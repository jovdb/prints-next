import styles from "./logo.module.css";
import SmartphotoLogo from "../../public/logo.svg";

export const Logo = () => {
	return (
		<div className={styles.logo}>
			{/* To investigate; viewBox property is lost from svg */}
			<SmartphotoLogo width="671" height="153" viewBox="0 0 671 153"/>
		</div>
	);
};
Logo.displayName = "Logo";
