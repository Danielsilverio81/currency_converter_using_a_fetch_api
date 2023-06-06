import "../css/style.css";
import {
  calculateAfterFirstInputChange,
  calculateAfterSecondInputChange,
  firstCalculateCurrencyConversion,
} from "./calculates.js";
import { fetchCurrenciesAndExchanges } from "./fetch.js";
import { changeSavedInternally } from "./obj.js";
import { SetToRenderOptions } from "./renderOptions.js";

async function execute() {
  const coinsAndExchanges = await fetchCurrenciesAndExchanges("USD");
  changeSavedInternally = { ...coinsAndExchanges };
  SetToRenderOptions(changeSavedInternally);
  firstCalculateCurrencyConversion(changeSavedInternally);
  calculateAfterSecondInputChange(changeSavedInternally);
  calculateAfterFirstInputChange();
}

document.addEventListener("DOMContentLoaded", execute());
