import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listOfCurrencies } from "./store/currencies/actions";
import { selectCoins } from "./store/currencies/selectors";
import Input from "./Components/Input";
import DatePicker from "./Components/DatePicker";
import CoinSelector from "./Components/CoinSelector";
import FinalConversionValue from "./Components/FinalConversionValue";
import "./Css/App.css";

const App = () => {
  const dispatch = useDispatch();
  const coinsList = useSelector(selectCoins);
  const [nameBase, setNameBase] = useState("EUR");
  const [nameConversion, setNameConversion] = useState("");
  const [conversionValue, setConversionValue] = useState(null);
  const [inputValue, setInputValue] = useState(null);
  const [total, setTotal] = useState(null);

  //This block gets today's date in the apropriate format
  const currentDate = new Date();
  const dd = String(currentDate.getDate()).padStart(2, "0");
  const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  const yyyy = currentDate.getFullYear();
  const today = yyyy + "-" + mm + "-" + dd;
  const [date, setDate] = useState(today);

  //This useEffect gets the list Of currencie's names and values from the API
  useEffect(() => {
    const coinsListKeys = Object.keys(coinsList);
    coinsListKeys.forEach((item) => {
      if (item === nameConversion) {
        setConversionValue(coinsList[item]);
      }
    });
  }, [nameBase, nameConversion, coinsList]);

  //This useEffect is responsible for the conversion
  useEffect(() => {
    if (date && nameBase) {
      dispatch(listOfCurrencies(date, nameBase));
    }

    if (inputValue && conversionValue) {
      setTotal(inputValue * conversionValue);
    }
  }, [dispatch, nameBase, date, inputValue, conversionValue]);

  //These save the user's selections
  const onSelectBase = (e) => {
    setNameBase(e.target.value);
  };

  const onSelect = (e) => {
    setNameConversion(e.target.value);
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <DatePicker setDate={setDate} date={date} today={today} />
      <div className="fields">
        <CoinSelector
          onChange={onSelectBase}
          options={Object.keys(coinsList)}
        />
        <Input onChange={onChangeInput} value={inputValue} />
      </div>
      <div className="fields">
        <CoinSelector onChange={onSelect} options={Object.keys(coinsList)} />
        <FinalConversionValue value={total} />
      </div>
      <div>
        {total && (
          <div className="message">
            {inputValue} {nameBase} is equal to {total.toFixed(2)}{" "}
            {nameConversion}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
