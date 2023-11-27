import { FC } from "react";
import styles from "./style.module.css";

export interface IText {
  text: string;
  fontSize?: number;
  color?: string;
}
export const Text: FC<IText> = ({ text, fontSize, color }) => {
  return (
    <div className={styles.text} style={{ fontSize: fontSize, color: color }}>
      {text}
    </div>
  );
};
