import { 
    splitSequenceNA,
    codonToAminoAcid,
    translateNAtoAA,
} from './helperFunctions.js';

import {
    amino_acids,
    amino_acids_abbr,
    amino_acids_three_letter,
    codons,
    HER2_long,
} from './constants.js';

/*const translatedAA = translateNAtoAA(HER2_long);
console.log("Translated AA is", translatedAA)*/

function autoResize(element) {
  element.style.height = 'auto';
  element.style.height = element.scrollHeight + 'px';
}

function transferText() {
  const input = document.getElementById("inputText");
  const output = document.getElementById("outputText");
  // Clean and transform input
  const cleanedInput = input.value.replace(/\s+/g, '').toUpperCase();
  input.value = cleanedInput;
  // Translate input
  const translatedNA = translateNAtoAA(cleanedInput);
  // Clear and update output
  output.value = ""; // Clear previous output
  output.value = translatedNA; // Set new output
  autoResize(output);
}


document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("inputText"); // ✅ This is the textarea

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", transferText);

  inputField.addEventListener("input", () => autoResize(inputField));
  inputField.addEventListener("paste", () => {
    setTimeout(() => autoResize(inputField), 0);
  });

  inputField.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      transferText();
    }
  });

  autoResize(inputField);
});
