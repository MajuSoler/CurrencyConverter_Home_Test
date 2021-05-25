import axios from "axios";
import { address, key } from "../../Config/constants";

//Exporting to the reducer.
export const CURRENCY_LIST_FETCHED = "CURRENCY_LIST_FETCHED";

//These actions send the information to the Reducer to be stored
const CurrencyListFetched = (currency_list) => ({
  type: CURRENCY_LIST_FETCHED,
  payload: currency_list,
});

//This action gets a list of all the currencies and values in the API to send it to the selectors.
export const listOfCurrencies = (date, base) => {
  return async (dispatch) => {
    const response = await axios.get(`${address}${date}?${key}&base=${base}`);

    const currency_list = response.data?.rates;
    dispatch(CurrencyListFetched(currency_list));
  };
};
