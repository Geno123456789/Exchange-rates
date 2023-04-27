import React, { useState } from 'react';
import { CurrencyType} from '../../App';
import styles from "./ExchangeRates.module.css";

export type ExchangeRatesProps = {
  currency : {
    [key:string]: CurrencyType;
  };
  updateValue: () => void;
};

export const ExchangeRates: React.FC<ExchangeRatesProps> = ({currency, updateValue}) => {
  const [currentCurrency, setCurrentCurrency] = useState("RUB");
  const currencies=Object.keys(currency)
  
  return (
    <div className={styles.container}>
      <h1>Список валют</h1>
      <select 
      onChange={(e)=> setCurrentCurrency(e.target.value)}
      >
        <option value="RUB" selected>RUB</option>
        {currencies.map((currency => (
          <option value={currency} key={currency}>{currency}</option>
        )))}
      </select>
      <ul className={styles.list}>
          <li>{`1 ${currency.USD?.CharCode} = ${currentCurrency==="RUB" ? currency.USD?.Value : (currency.USD?.Value/currency[currentCurrency]?.Value).toFixed(4)} ${currentCurrency}`}</li>
          <li>{`1 ${currency.EUR?.CharCode} = ${currentCurrency==="RUB" ? currency.EUR?.Value : (currency.EUR?.Value/currency[currentCurrency]?.Value).toFixed(4)} ${currentCurrency}`}</li>
          <li>{`1 ${currency.CHF?.CharCode} = ${currentCurrency==="RUB" ? currency.CHF?.Value : (currency.CHF?.Value/currency[currentCurrency]?.Value).toFixed(4)} ${currentCurrency}`}</li>  
          <li>{`1 ${currency.GBP?.CharCode} = ${currentCurrency==="RUB" ? currency.GBP?.Value : (currency.GBP?.Value/currency[currentCurrency]?.Value).toFixed(4)} ${currentCurrency}`}</li>    
      </ul>
      <button className={styles.updateButton} onClick={updateValue}>Обновить</button>
    </div>
  )
}

