import { FC } from "react";
import styles from "./style.module.css";
import { ResetButton } from "@components/shared/ResetButton";
import { IResultedValue } from "@hooks/useInput";
import { Text } from "@components/shared/Text";

export interface IShowBlock {
  bill: IResultedValue;
  peopleCount: IResultedValue;
  tip: IResultedValue;
  selectedTip: string;
  handleTipPerPerson: () => string;
  handleTotalPerPerson: () => string;
  handleReset: () => void;
}

export const ShowBlock: FC<IShowBlock> = ({
  bill,
  peopleCount,
  tip,
  selectedTip,
  handleTotalPerPerson,
  handleTipPerPerson,
  handleReset,
}) => {
  const tipPerPerson =
    (bill.value && peopleCount.value && tip.value) ||
    (bill.value && peopleCount.value && selectedTip)
      ? handleTipPerPerson()
      : "$0.00";

  const totalPerPerson =
    bill.value && peopleCount.value ? handleTotalPerPerson() : "$0.00";

  return (
    <div className={styles.showBlock}>
      <div className={styles.result}>
        <div className={styles.textBlock}>
          <Text
            text="Tip Amount/"
            color="var(--white)"
            style={{ margin: "0" }}
            fontSize={18}
          />
          <Text
            text="person"
            color="var(--grayish-cyan)"
            style={{ margin: "0" }}
          />
        </div>
        <Text text={tipPerPerson} color="var(--strong-cyan)" fontSize={56} />
      </div>
      <div className={styles.result}>
        <div className={styles.textBlock}>
          <Text
            text="Total/"
            color="var(--white)"
            style={{ margin: "0" }}
            fontSize={18}
          />
          <Text
            text="person"
            color="var(--grayish-cyan)"
            style={{ margin: "0" }}
          />
        </div>
        <Text text={totalPerPerson} color="var(--strong-cyan)" fontSize={56} />
      </div>
      <ResetButton onClick={handleReset} title="reset" />
    </div>
  );
};
