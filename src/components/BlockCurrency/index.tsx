import React from 'react';
import styles from "./BlockCurrency.module.css";


export type BlockCurrency = {
  value: string;
  currency: string;
  onChangeCurrency: (cur:string) => void;
  onChangeValue: (value:string) => void;
};

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'CHF', 'GBP'];

export const BlockCurrency: React.FC<BlockCurrency> = ({value, currency, onChangeCurrency, onChangeValue }) => {
  return (
    <div className={styles.container}>
    <ul className={styles.currencies}>
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? styles.active : ''}
          key={cur}>
          {cur}
        </li>
      ))}
    </ul>
    <input
      className={styles.field}
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder="0"
    />
  </div>
  )
}

