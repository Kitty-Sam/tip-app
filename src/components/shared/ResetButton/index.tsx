import styles from "./style.module.css";

export const ResetButton = () => {
  const title = "reset";
  return <button className={styles.resetBtn}>{title.toUpperCase()}</button>;
};
