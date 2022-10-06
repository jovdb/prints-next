import styles from "./price.module.css";

export const Price = ({ value }: { value: string }) => (
	<span className={styles.price}>
		{value}
	</span>
);
Price.displayName = "Price";
