import styles from "./style.module.css";
import { ChangeEvent, FC } from "react";

export interface IInput {
  icon: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<IInput> = ({ icon, value, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={
        styles.input +
        " " +
        (icon === "dollar" ? styles.dollarIcon : styles.avatarIcon)
      }
    />
  );
};
