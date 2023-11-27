import { FC } from "react";
import styles from "./style.module.css";
import { Text } from "@components/shared/Text";
import { Input } from "@components/shared/Input";
import { tips } from "@constants/tips.ts";
import { TipButton } from "@components/shared/TipButton";
import { IResultedValue } from "@hooks/useInput";

export interface IInputBlock {
  bill: IResultedValue;
  peopleCount: IResultedValue;
  tip: IResultedValue;
  selectedTip: string;
  handleSelectTip: (value: string) => () => void;
}

export const InputBlock: FC<IInputBlock> = ({
  bill,
  peopleCount,
  selectedTip,
  tip,
  handleSelectTip,
}) => {
  const resultedTips = tips.map((el) =>
    el == "Custom" ? (
      <input
        className={styles.tipInput}
        placeholder="Custom"
        key={el}
        disabled={!!selectedTip}
        onChange={tip.handleChange}
        value={tip.value}
      />
    ) : (
      <div key={el}>
        <TipButton
          title={el}
          onClick={handleSelectTip(el)}
          style={{
            backgroundColor:
              selectedTip !== el
                ? "var(--very-dark-cyan)"
                : "var(--light-grayish-cyan)",

            color:
              selectedTip !== el
                ? "var(--light-grayish-cyan)"
                : "var(--very-dark-cyan)",
          }}
        />
      </div>
    ),
  );

  return (
    <div className={styles.inputBlock}>
      <>
        <Text text="Bill" />
        <Input
          placeholder="0"
          icon="dollar"
          value={bill.value}
          onChange={bill.handleChange}
        />
        <Text text={bill.error} color="var(--error)" />
      </>
      <>
        <Text text="Select Tip %" />
        <div className={styles.tipsBlock}>{resultedTips}</div>
        <Text text={tip.error} color="var(--error)" />
      </>
      <>
        <Text text="Number of People" />
        <Input
          placeholder="0"
          icon="avatar"
          onChange={peopleCount.handleChange}
          value={peopleCount.value}
          error={peopleCount.error}
        />
        <Text text={peopleCount.error} color="var(--error)" />
      </>
    </div>
  );
};
