import styles from "./style.module.css";
import { FC } from "react";

export interface IInput {
  icon: string;
}

export const Input: FC<IInput> = ({ icon }) => {
  return (
    <input
      className={
        styles.input +
        " " +
        (icon === "dollar" ? styles.dollarIcon : styles.avatarIcon)
      }
    />
  );
};
