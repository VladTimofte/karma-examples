// domHandler.js

import { generatePassword } from './passwordGenerator.js';

export function addEventListeners() {
    const form = document.getElementById('passwordForm');
    const resultContainer = document.getElementById('passwordResult');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const length = parseInt(document.getElementById('passwordLength').value);
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;

        const password = generatePassword(length, includeUppercase, includeSymbols, includeNumbers);
        resultContainer.textContent = `Password: ${password}`;
    });
}
addEventListeners()
