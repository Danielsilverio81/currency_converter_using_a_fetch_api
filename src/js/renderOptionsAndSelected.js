import { selectPlace1, selectPlace2 } from "./home.js"

export function renderSelectOptions(symbolsOfCoins) {
  const option1 = document.createElement('option')
  option1.id = 'choice1'
  option1.textContent = symbolsOfCoins
  const option2 = document.createElement('option')
  option2.id = 'choice2'
  option2.textContent = symbolsOfCoins
  setSelectedOptions('USD', 'BRL')

  selectPlace1.append(option1)
  selectPlace2.append(option2)
}

export function setSelectedOptions(initialCurrency, secondCurrency) {
  const choices1Array = Array.from(selectPlace1.options)
  choices1Array.forEach(value => value.textContent == initialCurrency ? value.setAttribute('selected', 'true') : '')
  const choices2Array = Array.from(selectPlace2.options)
  choices2Array.forEach(value => value.textContent == secondCurrency ? value.setAttribute('selected', 'true') : '')
}

export function setToRenderOptions(internalObj) {
  return Object.keys(internalObj.conversion_rates).forEach(renderSelectOptions)
}