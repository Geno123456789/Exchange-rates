import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header } from './components/Header';
import { ExchangeRates} from './components/ExchangeRates';
import { CurrencyConvertor } from './components/CurrencyConvertor';
import './App.css';

export type CurrencyType = {
      CharCode: string;
      ID: string;
      Name: string;
      Nominal: number;
      NumCode: string;
      Previous: number;
      Value: number;
    
};

export type ExchangeRatesType = {
  Date: string;
  PreviousDate: string;
  Timestamp: string;
  Valute : {
    [key:string]: CurrencyType;
  }
};

const initialState = {
  Date: "",
  PreviousDate: "",
  Timestamp: "",
  Valute: {
    Currency: {
      CharCode: "",
      ID: "",
      Name: "",
      Nominal: 0,
      NumCode: "",
      Previous: 0,
      Value: 0,
    }
  }
}

function App() {
  const [rates, setRates] = useState<ExchangeRatesType>(initialState);
  const [updateCurrency, setUpdateCurrency] = useState(false);

  const updateValue = () => {
    setUpdateCurrency(!updateCurrency);
  }

  useEffect(() => {
    // setInterval(() => {
      axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => {
        setRates(response.data);
      })
    // }, 60000)
    axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => {
        setRates(response.data);
      })
  }, [updateCurrency]);

  return (
    
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/list">
            <ExchangeRates currency={rates.Valute} updateValue={updateValue}/>
          </Route>
          <Route path="/convertor">
            <CurrencyConvertor currency={rates.Valute} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
