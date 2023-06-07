import { calculateAfterFirstInputChange, calculateAfterSecondInputChange, firstCalculateCurrencyConversion } from "./calculate.js"
import { createErrorMessage, getErrorMessage } from "./errorMess.js"
import { activeBtn } from "./lightDarkBtn.js"
import { setToRenderOptions } from "./renderOptionsAndSelected.js"

export let changeSavedInternally = {}
export let secondObjChangeSavedInternally = {}

export const selectPlace1 = document.querySelector('#my-select1')
export const selectPlace2 = document.querySelector('#my-select2')
export let displayForCalc = document.querySelector('.showInDisplayCalc')
export let realExchangeRate = document.querySelector('.real-exchange-rate-display')
export const valueForCalculation = document.getElementById('input-number')


export async function fetchCurrenciesAndExchanges(coinSymbol) {
  const url = `https://v6.exchangerate-api.com/v6/fa425e2a3e5522ddb87cc6c2/latest/${coinSymbol}`
  try {
    const coins = await fetch(url)
    const response = await coins.json()

    if (response.result === "error") {
      throw new Error(getErrorMessage(response['error-type']))
    } else if (!coins.ok) {
      throw new Error('Sua conexão com a internet teve algum problema!')
    } else {
      return response
    } 
  } catch (error) {
    createErrorMessage(error.message)
  }
}

export async function execute() {
  const coinsAndExchanges = await fetchCurrenciesAndExchanges('USD')
  changeSavedInternally = {...coinsAndExchanges}
  setToRenderOptions(changeSavedInternally)
  firstCalculateCurrencyConversion(changeSavedInternally)
  calculateAfterSecondInputChange(changeSavedInternally)
  calculateAfterFirstInputChange()
  activeBtn()
}

document.addEventListener('DOMContentLoaded', execute())