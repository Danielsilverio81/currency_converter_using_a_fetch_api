import { displayForCalc, fetchCurrenciesAndExchanges, realExchangeRate, secondObjChangeSavedInternally, selectPlace1, selectPlace2, valueForCalculation } from "./home.js"

export function firstCalculateCurrencyConversion(internalObj) {
  const firstCalculate = (valueForCalculation.value * internalObj.conversion_rates[selectPlace2.value])
  displayForCalc.innerHTML = `<span>${firstCalculate.toFixed(2)} ${selectPlace2.value}</span>`
  realExchangeRate.innerHTML = `<span>1 ${selectPlace1.value} = ${(1 * internalObj.conversion_rates[selectPlace2.value])}
  ${selectPlace2.value}</span>`
  valueForCalculation.addEventListener('input', (e) => {
  const valueExchange = (e.target.value * internalObj.conversion_rates[selectPlace2.value])
  displayForCalc.innerHTML = `<span>${valueExchange.toFixed(2)} ${selectPlace2.value}</span>`
  realExchangeRate.innerHTML = `<span>1 ${selectPlace1.value} = ${(1 * internalObj.conversion_rates[selectPlace2.value])}
  ${selectPlace2.value}</span>`
})
}

export function calculateAfterSecondInputChange(internalObj) {
  selectPlace2.addEventListener('input', (e) => {
  const newConversion = (valueForCalculation.value * internalObj.conversion_rates[e.target.value])
  displayForCalc.innerHTML = `<span>${newConversion.toFixed(2)} ${selectPlace2.value}</span>`
  realExchangeRate.innerHTML = `<span>1 ${selectPlace1.value} = ${(1 * internalObj.conversion_rates[e.target.value])}
  ${e.target.value}</span>`
  })
}

export function calculateAfterFirstInputChange() {
  selectPlace1.addEventListener('input', async (e) => {
    const newRequest = await fetchCurrenciesAndExchanges(e.target.value)
    secondObjChangeSavedInternally = {...newRequest}
    firstCalculateCurrencyConversion(secondObjChangeSavedInternally)
    calculateAfterSecondInputChange(secondObjChangeSavedInternally)
  })
} 