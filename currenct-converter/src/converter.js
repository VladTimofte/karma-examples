// src/converter.js

export function convert(amount, fromCurrency, toCurrency) {
  const exchangeRates = {
    USD: { USD: 1, EUR: 0.85, RON: 4.5, GBP: 0.75 },
    EUR: { USD: 1.18, EUR: 1, RON: 5.3, GBP: 0.88 },
    RON: { USD: 0.22, EUR: 0.19, RON: 1, GBP: 0.16 },
    GBP: { USD: 1.33, EUR: 1.14, RON: 6.0, GBP: 1 }
  };

  if (amount < 0) {
    throw new Error("Suma nu poate fi negativă.");
  }

  const rate = exchangeRates[fromCurrency][toCurrency];
  return (amount * rate).toFixed(2);
}
