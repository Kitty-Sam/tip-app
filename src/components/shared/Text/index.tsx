import { CSSProperties, FC } from "react";
import styles from "./style.module.css";

export interface IText {
  text: string;
  fontSize?: number;
  color?: string;
  style?: CSSProperties;
}
export const Text: FC<IText> = ({ text, fontSize, color, style }) => {
  return (
    <div
      className={styles.text}
      style={{ fontSize: fontSize, color: color, ...style }}
    >
      {text}
    </div>
  );
};
