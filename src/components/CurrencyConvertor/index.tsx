import React, { useEffect, useState } from 'react';
import { CurrencyType } from '../../App';
import { BlockCurrency } from '../BlockCurrency';
import styles from "./CurrencyConvertor.module.css";

export type CurrencyConvertor = {
  currency : {
    [key:string]: CurrencyType;
  };
};

export const CurrencyConvertor: React.FC<CurrencyConvertor> = ({currency}) => {
  
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
  

  const currencies=Object.keys(currency)

  const onChangeFromPrice = (value: number) => {
    const result = value * (currency[fromCurrency]?.Value / currency[toCurrency]?.Value);
    const resultRUB = toCurrency === "RUB" ? value : value / currency[toCurrency]?.Value;
    const resultToCurrencyRUB = value * currency[fromCurrency]?.Value;

    if(toCurrency === "RUB" && fromCurrency !== "RUB") {
      setToPrice(resultToCurrencyRUB)
    } else if(toCurrency === "RUB" && fromCurrency === "RUB") {
      setToPrice(value);
    } else {
      setToPrice(fromCurrency === "RUB" ? resultRUB : result);
    }
    
    setFromPrice(value);
  }
  
  const onChangeToPrice = (value: number) => {
    const result = value * (currency[fromCurrency]?.Value / currency[toCurrency]?.Value);
    const resultRUB = toCurrency === "RUB" ? value : value / currency[toCurrency]?.Value;
    const resultToCurrencyRUB = value * currency[fromCurrency]?.Value;

    if(toCurrency === "RUB" && fromCurrency !== "RUB") {
      setFromPrice(resultToCurrencyRUB)
    } else if(toCurrency === "RUB" && fromCurrency === "RUB") {
      setFromPrice(value);
    } else {
      setFromPrice(fromCurrency === "RUB" ? resultRUB : result);
    }
      setToPrice(value)
  }



  useEffect(()=> {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(()=> {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div>
      <h1>Конвертер валют</h1>
      <BlockCurrency 
      currencies={currencies}
      value={fromPrice}
      currency={fromCurrency}
      onChangeCurrency={setFromCurrency}
      onChangeValue={onChangeFromPrice}
      />
      <BlockCurrency 
      currencies={currencies}
      value={toPrice}
      currency={toCurrency}
      onChangeCurrency={setToCurrency}
      onChangeValue={onChangeToPrice}
      />
    </div>
  )
}

