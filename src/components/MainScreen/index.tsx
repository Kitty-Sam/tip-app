import styles from "./style.module.css";
import { useState } from "react";
import { useInput } from "@hooks/useInput";
import { InputBlock } from "@components/InputBlock";
import { ShowBlock } from "@components/ShowBlock";

export const MainScreen = () => {
  const [selectedTip, setSelectedTip] = useState<string>("");

  const bill = useInput("");
  const tip = useInput("");
  const peopleCount = useInput("");

  const handleSelectTip = (tipValue: string) => () => {
    tip.reset();
    setSelectedTip(tipValue === selectedTip ? "" : tipValue);
  };

  const handleReset = () => {
    bill.reset();
    tip.reset();
    peopleCount.reset();
    bill.resetError();
    tip.resetError();
    peopleCount.resetError();
    setSelectedTip("");
  };

  const handleTipPerPerson = () => {
    if (tip.value && bill.value && peopleCount.value) {
      return Math.round(
        (Number(bill.value) * Number(tip.value)) /
          100 /
          Number(peopleCount.value),
      ).toFixed(2);
    }

    if (selectedTip && bill.value && peopleCount.value) {
      return (
        "$" +
        Math.round(
          (Number(bill.value) * Number(selectedTip.slice(0, -1))) /
            100 /
            Number(peopleCount.value),
        ).toFixed(2)
      );
    } else {
      return "";
    }
  };

  const handleTotalPerPerson = () => {
    return (
      "$" +
      Math.round(Number(bill.value) / Number(peopleCount.value)).toFixed(2)
    );
  };

  return (
    <div className={styles.wrapper}>
      <InputBlock
        bill={bill}
        peopleCount={peopleCount}
        tip={tip}
        selectedTip={selectedTip}
        handleSelectTip={handleSelectTip}
      />
      <ShowBlock
        bill={bill}
        peopleCount={peopleCount}
        tip={tip}
        selectedTip={selectedTip}
        handleTipPerPerson={handleTipPerPerson}
        handleTotalPerPerson={handleTotalPerPerson}
        handleReset={handleReset}
      />
    </div>
  );
};
