// src/domHandler.js

import { convert } from './converter.js';

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("convertButton").addEventListener("click", function() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    try {
      const result = convert(amount, fromCurrency, toCurrency);
      document.getElementById("result").innerText = result;
    } catch (error) {
      document.getElementById("result").innerText = error.message;
    }
  });
});
