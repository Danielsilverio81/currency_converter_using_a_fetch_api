import { createErrorMessage, getErrorMessage } from "./errorMess.js";

export async function fetchCurrenciesAndExchanges(coinSymbol) {
  const url = `https://v6.exchangerate-api.com/v6/fa425e2a3e5522ddb87cc6c2/latest/${coinSymbol}`;
  try {
    const coins = await fetch(url);
    const response = await coins.json();

    if (response.result === "error") {
      throw new Error(getErrorMessage(response["error-type"]));
    } else if (!coins.ok) {
      throw new Error("Sua conexão com a internet teve algum problema!");
    } else {
      return response;
    }
  } catch (error) {
    createErrorMessage(error.message);
  }
}
