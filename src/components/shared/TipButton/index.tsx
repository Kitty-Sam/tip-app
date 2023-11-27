import styles from "./style.module.css";
import { CSSProperties, FC } from "react";

export interface ITipButton {
  title: string;
  onClick: () => void;
  style: CSSProperties;
}

export const TipButton: FC<ITipButton> = ({ title, onClick, style }) => {
  return (
    <button
      key={title}
      className={styles.tipBtn}
      onClick={onClick}
      style={style}
    >
      {title}
    </button>
  );
};
