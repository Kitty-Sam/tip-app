import styles from "./style.module.css";
import { Input } from "@components/shared/Input";
import { ResetButton } from "@components/shared/ResetButton";
import { TipButton } from "@components/shared/TipButton";
import { Text } from "@components/shared/Text";
import { tips } from "@constants/tips.ts";

export const MainScreen = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputBlock}>
        <>
          <Text text="Bill" />
          <Input icon="dollar" />
        </>
        <>
          <Text text="Select Tip %" />
          <div className={styles.tipsBlock}>
            {tips.map((tip) =>
              tip == "Custom" ? (
                <input
                  className={styles.tipInput}
                  placeholder="Custom"
                  key={tip}
                />
              ) : (
                <TipButton key={tip} title={tip} />
              ),
            )}
          </div>
        </>
        <>
          <Text text="Number of People" />
          <Input icon="avatar" />
        </>
      </div>

      <div className={styles.showBlock}>
        <ResetButton />
      </div>
    </div>
  );
};
