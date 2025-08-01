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
  const Frame1output = document.getElementById("outputText");
  const Frame2output = document.getElementById("outputText2");
  const Frame3output = document.getElementById("outputText3");
  // Clean and transform input
  const cleanedInput = input.value.replace(/\s+/g, '').toUpperCase();
  input.value = cleanedInput;

 // Frames 2 and 3
  const cleanedInput2 = cleanedInput.slice(1); // Remove first character
  const cleanedInput3 = cleanedInput.slice(2); // Remove first two characters

  // Translate input
  const translatedNA = translateNAtoAA(cleanedInput);
  const translatedNA2 = translateNAtoAA(cleanedInput2);
  const translatedNA3 = translateNAtoAA(cleanedInput3);
  // Clear and update output
  Frame1output.value = ""; // Clear previous output
  Frame2output.value = ""; // Clear previous output
  Frame3output.value = ""; // Clear previous output

  Frame1output.value = translatedNA; // Set new output
  Frame2output.value = translatedNA2; // Set new output
  Frame3output.value = translatedNA3; // Set new output

  autoResize(Frame1output);
  autoResize(Frame2output);
  autoResize(Frame3output);
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
