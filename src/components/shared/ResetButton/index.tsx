import styles from "./style.module.css";
import { FC } from "react";

export interface IResetButton {
  onClick: () => void;
  title: string;
}

export const ResetButton: FC<IResetButton> = ({ onClick, title }) => {
  return (
    <button className={styles.resetBtn} onClick={onClick}>
      {title.toUpperCase()}
    </button>
  );
};
