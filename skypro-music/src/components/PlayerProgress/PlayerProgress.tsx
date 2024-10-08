import styles from "./PlayerProgress.module.css";
import React, { ChangeEvent } from "react";

type Props = {
  max: number;
  value: number;
  step: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PlayerProgress = React.memo(({ max, value, step, onChange }: Props) => {
  return (
    <input
      className={styles.styledProgressInput} // Применение стилей к ползунку
      type="range" // Тип элемента - ползунок
      min="0" // Минимальное значение ползунка
      max={max} // Максимальное значение, зависит от длительности аудио
      value={value} // Текущее значение ползунка
      step={step} // Шаг изменения значения
      onChange={onChange} // Обработчик события изменения
    />
  );
});
PlayerProgress.displayName = "PlayerProgress";
export default PlayerProgress;