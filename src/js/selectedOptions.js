import { selectPlace1, selectPlace2 } from "./getElements.js";

export function setSelectedOptions(initialCurrency, secondCurrency) {
  const choices1Array = Array.from(selectPlace1.options);
  choices1Array.forEach((value) =>
    value.textContent == initialCurrency
      ? value.setAttribute("selected", "true")
      : ""
  );
  const choices2Array = Array.from(selectPlace2.options);
  choices2Array.forEach((value) =>
    value.textContent == secondCurrency
      ? value.setAttribute("selected", "true")
      : ""
  );
}
