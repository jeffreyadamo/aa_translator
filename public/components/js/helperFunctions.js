const codonToAminoAcid = (codon) => {
  let input = codon.toString()
  switch (codon) {
      case "GCT": case "GCC": case "GCA": case "GCG":
          return "A"; // Alanine
      case "CGT": case "CGC": case "CGA": case "CGG": case "AGA": case "AGG":
          return "R"; // Arginine
      case "AAT": case "AAC":
          return "N"; // Asparagine
      case "GAT": case "GAC":
          return "D"; // Aspartic acid
      case "TGT": case "TGC":
          return "C"; // Cysteine
      case "GAA": case "GAG":
          return "E"; // Glutamic acid
      case "CAA": case "CAG":
          return "Q"; // Glutamine
      case "GGT": case "GGC": case "GGA": case "GGG":
          return "G"; // Glycine
      case "CAT": case "CAC":
          return "H"; // Histidine
      case "ATT": case "ATC": case "ATA":
          return "I"; // Isoleucine
      case "TTA": case "TTG": case "CTT": case "CTC": case "CTA": case "CTG":
          return "L"; // Leucine
      case "AAA": case "AAG":
          return "K"; // Lysine
      case "ATG":
          return "M"; // Methionine
      case "TTT": case "TTC":
          return "F"; // Phenylalanine
      case "CCT": case "CCC": case "CCA": case "CCG":
          return "P"; // Proline
      case "TCT": case "TCC": case "TCA": case "TCG": case "AGT": case "AGC":
          return "S"; // Serine
      case "ACT": case "ACC": case "ACA": case "ACG":
          return "T"; // Threonine
      case "TGG":
          return "W"; // Tryptophan
      case "TAT": case "TAC":
          return "Y"; // Tyrosine
      case "GTT": case "GTC": case "GTA": case "GTG":
          return "V"; // Valine
      case "TGA": case "TAA": case "TAG":
          return "*"; // Stop
      default:
          return input; // Handle invalid codons  
}
}

const splitSequenceNA = (str) => {
    str = str.toUpperCase();
    let result = [];
    for (let i=0; i < str.length; i += 3) {
      result.push(str.substring(i, i+3));
    }
    return result
  }

let convertedStr = "";

const translateNAtoAA = (arr) => {
    arr = arr.split(",");
    let splitNaArray = splitSequenceNA(arr[0]);   
    let convertedStr = "";
    for (let i=0; i < splitNaArray.length; i++) {
      let codon = codonToAminoAcid(splitNaArray[i]);
      convertedStr += codon;
    }
    return convertedStr;
  }

export { 
  splitSequenceNA, 
  codonToAminoAcid, 
  translateNAtoAA 
};
