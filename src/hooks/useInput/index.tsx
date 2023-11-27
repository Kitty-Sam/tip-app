import { ChangeEvent, useState } from "react";

export interface IResultedValue {
  value: string;
  reset: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string;
  resetError: () => void;
}
export const useInput = (initValue: string): IResultedValue => {
  const [value, setValue] = useState<string>(initValue);
  const [error, setError] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    resetError();

    if (isNaN(Number(event.target.value))) {
      setError("Use only positive numbers");
      return;
    }
    if (event.target.value === "0") {
      setError("It cant be zero");
      return;
    }
    setValue(event.target.value);
  };

  const reset = () => {
    setValue(initValue);
  };

  const resetError = () => {
    setError("");
  };

  return {
    value,
    handleChange,
    reset,
    error,
    resetError,
  };
};