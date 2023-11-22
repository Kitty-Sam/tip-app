import { FC } from "react";
import styles from "./style.module.css";

export interface IText {
  text: string;
}
export const Text: FC<IText> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
