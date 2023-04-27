import React, { useEffect, useState } from 'react';
import { CurrencyType } from '../../App';
import { BlockCurrency } from '../BlockCurrency';
import reverse from '../../image/reverse.svg'
import styles from "./CurrencyConvertor.module.css";

export type CurrencyConvertor = {
  currency : {
    [key:string]: CurrencyType;
  };
};

export const CurrencyConvertor: React.FC<CurrencyConvertor> = ({currency}) => {
  
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  
  const onChangeFromPrice = (value: string) => {
    const result = +value * (currency[fromCurrency]?.Value / currency[toCurrency]?.Value);
    const resultRUB = toCurrency === "RUB" ? value : +value / currency[toCurrency]?.Value;
    const resultToCurrencyRUB = +value * currency[fromCurrency]?.Value;

    if(toCurrency === "RUB" && fromCurrency !== "RUB") {
      setToPrice(String(resultToCurrencyRUB));
    } else if(toCurrency === "RUB" && fromCurrency === "RUB") {
      setToPrice(String(value));
    } else {
      setToPrice(fromCurrency === "RUB" ? String(resultRUB) : String(result));
    }
    setFromPrice(value);
  }
  
  const onChangeToPrice = (value: string) => {
    const result = +value * (currency[fromCurrency]?.Value / currency[toCurrency]?.Value);
    const resultRUB = toCurrency === "RUB" ? value : +value / currency[toCurrency]?.Value;
    const resultToCurrencyRUB = +value * currency[fromCurrency]?.Value;

    if(toCurrency === "RUB" && fromCurrency !== "RUB") {
      setFromPrice(String(resultToCurrencyRUB))
    } else if(toCurrency === "RUB" && fromCurrency === "RUB") {
      setFromPrice(String(value));
    } else {
      setFromPrice(fromCurrency === "RUB" ? String(resultRUB) : String(result));
    }
  }

  const onChangeCurrentCurrency = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromPrice(fromPrice);
  }

  useEffect(()=> {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(()=> {
    onChangeToPrice(toPrice);
  }, [toCurrency]);



  return (
    <div className={styles.container}>
      <h1>Конвертер валют</h1>
      <div className={styles.block}>
        <BlockCurrency 
          value={fromPrice}
          currency={fromCurrency}
          onChangeCurrency={setFromCurrency}
          onChangeValue={onChangeFromPrice}
        />
        <img 
          className={styles.reverse} 
          src={reverse} alt="reverse arrow"
          onClick={onChangeCurrentCurrency}
        />
        <BlockCurrency 
          value={toPrice}
          currency={toCurrency}
          onChangeCurrency={setToCurrency}
          onChangeValue={onChangeToPrice}
        />
      </div>
    </div>
  )
}

