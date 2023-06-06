import { selectPlace1, selectPlace2 } from "./getElements.js";
import { setSelectedOptions } from "./selectedOptions.js";

export function renderSelectOptions(symbolsOfCoins) {
  const option1 = document.createElement("option");
  option1.id = "choice1";
  setSelectedOptions("USD", "BRL");
  option1.textContent = symbolsOfCoins;
  const option2 = document.createElement("option");
  option2.id = "choice2";
  option2.textContent = symbolsOfCoins;

  selectPlace1.append(option1);
  selectPlace2.append(option2);
}

export function SetToRenderOptions(internalObj) {
  return Object.keys(internalObj.conversion_rates).forEach(renderSelectOptions);
}
