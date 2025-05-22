const { 
    splitSequenceNA,
    codonToAminoAcid,
    translateNAtoAA,
 } = require('./helperFunctions.js');

const {
    amino_acids,
    amino_acids_abbr,
    amino_acids_three_letter,
    codons,
    HER2_long,
} = require('./constants.js')


const translatedAA = translateNAtoAA(HER2_long);

console.log("");
console.log("input NA is: ", HER2_long[0]);
console.log("output AA is: ", translatedAA);
