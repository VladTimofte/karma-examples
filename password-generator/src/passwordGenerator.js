// passwordGenerator.js

export function generatePassword(
  length,
  includeUppercase,
  includeSymbols,
  includeNumbers
) {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  const numbers = "0123456789";

  if (includeUppercase) charset += upperChars;
  if (includeSymbols) charset += symbols;
  if (includeNumbers) charset += numbers;

  let password = loopPassword(length, lowerChars);
  const parsedPass = JSON.parse(getLS());

  while (parsedPass.includes(password)) {
    password = loopPassword(length, lowerChars);
  }
  addToLS(password);
  return password;
}

function loopPassword(length, lowerChars) {
  let password = "";
  let charset = lowerChars;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
}

function addToLS(password) {
  const allPreviousPasswords = getLS();
  let parsedPasswords = [];

  if (allPreviousPasswords) {
    try {
      // Only attempt to parse if the data isn't empty
      if (allPreviousPasswords.trim()) {
        parsedPasswords = JSON.parse(allPreviousPasswords);
      }
    } catch (e) {
      console.error("Error parsing passwords from localStorage:", e);
      parsedPasswords = [];
    }
  }

  parsedPasswords.push(password);
  localStorage.setItem(
    "generatedPasswordsHistory",
    JSON.stringify(parsedPasswords)
  );
}

function getLS() {
  return localStorage.getItem("generatedPasswordsHistory") || [];
}
