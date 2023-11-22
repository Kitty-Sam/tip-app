import styles from "./style.module.css";
import { FC } from "react";

export interface ITipButton {
  title: string;
}

export const TipButton: FC<ITipButton> = ({ title }) => {
  return (
    <button key={title} className={styles.tipBtn}>
      {title}
    </button>
  );
};
