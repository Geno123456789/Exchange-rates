import React, { useState } from 'react';
import { CurrencyType } from '../../App';
import styles from "./BlockCurrency.module.css";


export type BlockCurrency = {
  currencies: string[];
  value: number;
  currency: string;
  onChangeCurrency: (cur:string) => void;
  onChangeValue: (value:number) => void;
};

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const BlockCurrency: React.FC<BlockCurrency> = ({currencies, value, currency, onChangeCurrency, onChangeValue }) => {
   
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
      onChange={(e) => onChangeValue(+e.target.value)}
      value={value}
      type="number"
      placeholder="0"
    />
  </div>
  )
}

