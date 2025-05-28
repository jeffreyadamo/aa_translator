const amino_acids = [
  "Alanine", "Arginine", "Asparagine", "Aspartic acid", "Cysteine",
  "Glutamic acid", "Glutamine", "Glycine", "Histidine", "Isoleucine",
  "Leucine", "Lysine", "Methionine", "Phenylalanine", "Proline",
  "Serine", "Threonine", "Tryptophan", "Tyrosine", "Valine"
]

const amino_acids_abbr = [
  "A", "R", "N", "D", "C",
  "E", "Q", "G", "H", "I",
  "L", "K", "M", "F", "P",
  "S", "T", "W", "Y", "V"
]

const amino_acids_three_letter = [
  "Ala", "Arg", "Asn", "Asp", "Cys",
  "Glu", "Gln", "Gly", "His", "Ile",
  "Leu", "Lys", "Met", "Phe", "Pro",
  "Ser", "Thr", "Trp", "Tyr", "Val"
]

const codons = [
  "TTT", "TTC", "TTA", "TTG", "CTT", "CTC", "CTA", "CTG",
  "ATT", "ATC", "ATA", "ATG", "GTT", "GTC", "GTA", "GTG",
  "TCT", "TCC", "TCA", "TCG", "CCT", "CCC", "CCA", "CCG",
  "ACT", "ACC", "ACA", "ACG", "GCT", "GCC", "GCA", "GCG",
  "TAT", "TAC", "TAA", "TAG", "CAT", "CAC", "CAA", "CAG",
  "AAT", "AAC", "AAA", "AAG", "GAT", "GAC", "GAA", "GAG",
  "TGT", "TGC", "TGA", "TGG", "CGT", "CGC", "CGA", "CGG",
  "AGT", "AGC", "AGA", "AGG", "GGT", "GGC", "GGA", "GGG"
]

const HER2_long = ["acccaagtgtgcaccggcacagacatgaagctgcggctccctgccagtcccgagacccacctggacatgctccgccacctctaccagggctgccaggtggtgcagggaaacctggaactcacctacctgcccaccaatgccagcctgtccttcctgcaggatatccaggaggtgcagggctacgtgctcatcgctcacaaccaagtgaggcaggtcccactgcagaggctgcggattgtgcgaggcacccagctctttgaggacaactatgccctggccgtgctagacaatggagacccgctgaacaataccacccctgtcacaggggcctccccaggaggcctgcgggagctgcagcttcgaagcctcacagagatcttgaaaggaggggtcttgatccagcggaacccccagctctgctaccaggacacgattttgtggaaggacatcttccacaagaacaaccagctggctctcacactgatagacaccaaccgctctcgggcctgccacccctgttctccgatgtgtaagggctcccgctgctggggagagagttctgaggattgtcagagcctgacgcgcactgtctgtgccggtggctgtgcccgctgcaaggggccactgcccactgactgctgccatgagcagtgtgctgccggctgcacgggccccaagcactctgactgcctggcctgcctccacttcaaccacagtggcatctgtgagctgcactgcccagccctggtcacctacaacacagacacgtttgagtccatgcccaatcccgagggccggtatacattcggcgccagctgtgtgactgcctgtccctacaactacctttctacggacgtgggatcctgcaccctcgtctgccccctgcacaaccaagaggtgacagcagaggatggaacacagcggtgtgagaagtgcagcaagccctgtgcccgagtgtgctatggtctgggcatggagcacttgcgagaggtgagggcagttaccagtgccaatatccaggagtttgctggctgcaagaagatctttgggagcctggcatttctgccggagagctttgatggggacccagcctccaacactgccccgctccagccagagcagctccaagtgtttgagactctggaagagatcacaggttacctatacatctcagcatggccggacagcctgcctgacctcagcgtcttccagaacctgcaagtaatccggggacgaattctgcacaatggcgcctactcgctgaccctgcaagggctgggcatcagctggctggggctgcgctcactgagggaactgggcagtggactggccctcatccaccataacacccacctctgcttcgtgcacacggtgccctgggaccagctctttcggaacccgcaccaagctctgctccacactgccaaccggccagaggacgagtgtgtgggcgagggcctggcctgccaccagctgtgcgcccgagggcactgctggggtccagggcccacccagtgtgtcaactgcagccagttccttcggggccaggagtgcgtggaggaatgccgagtactgcaggggctccccagggagtatgtgaatgccaggcactgtttgccgtgccaccctgagtgtcagccccagaatggctcagtgacctgttttggaccggaggctgaccagtgtgtggcctgtgcccactataaggaccctcccttctgcgtggcccgctgccccagcggtgtgaaacctgacctctcctacatgcccatctggaagtttccagatgaggagggcgcatgccagccttgccccatcaactgcacccactcctgtgtggacctggatgacaagggctgccccgccgagcagagagccagccctctgacgtga"]


export { 
  amino_acids,
  amino_acids_abbr,
  amino_acids_three_letter,
  codons,
  HER2_long,
};