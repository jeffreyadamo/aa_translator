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

function highlightM(sequence) {
  return sequence.replace(/M/g, '<span class="highlight-m">M</span>');
}

function transferText() {
  const input = document.getElementById("inputText");
  const Frame1output = document.getElementById("outputText");
  const Frame2output = document.getElementById("outputText2");
  const Frame3output = document.getElementById("outputText3");
  // Clean and transform input
  const cleanedInput = input.value.trim().replace(/\s+/g, '').toUpperCase();
  input.value = cleanedInput;

 // Frames 2 and 3
  const cleanedInput2 = cleanedInput.slice(1); // Remove first character
  const cleanedInput3 = cleanedInput.slice(2); // Remove first two characters

  // Translate input
  const translatedNA = translateNAtoAA(cleanedInput);
  const translatedNA2 = translateNAtoAA(cleanedInput2);
  const translatedNA3 = translateNAtoAA(cleanedInput3);
  // Clear and update output
  Frame1output.innerHTML = ""; // Clear previous output
  Frame2output.innerHTML = ""; // Clear previous output
  Frame3output.innerHTML = ""; // Clear previous output

  Frame1output.innerHTML = highlightM(translatedNA); // Set new output
  Frame2output.innerHTML = highlightM(translatedNA2); // Set new output
  Frame3output.innerHTML = highlightM(translatedNA3); // Set new output

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

  document.getElementById("copyBtn1").addEventListener("click", copyOutput1);
  document.getElementById("copyBtn2").addEventListener("click", copyOutput2);
  document.getElementById("copyBtn3").addEventListener("click", copyOutput3);

});


window.addEventListener("resize", () => {
  const Frame1output = document.getElementById("outputText");
  const Frame2output = document.getElementById("outputText2");
  const Frame3output = document.getElementById("outputText3");

  autoResize(Frame1output);
  autoResize(Frame2output);
  autoResize(Frame3output);
});


function copyOutput1() {
  const outputText = document.getElementById("outputText").textContent;
  navigator.clipboard.writeText(outputText)
    .then(() => {
      alert("Output copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

function copyOutput2() {
  const outputText = document.getElementById("outputText2").textContent;
  navigator.clipboard.writeText(outputText)
    .then(() => {
      alert("Output copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

function copyOutput3() {
  const outputText = document.getElementById("outputText3").textContent;
  navigator.clipboard.writeText(outputText)
    .then(() => {
      alert("Output copied to clipboard!");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
}

