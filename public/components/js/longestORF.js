function findLongestORF(aminoAcidSequence) {
    let orfs = []; // Array to store all open reading frames
    let currentORF = ''; // Current ORF being built
    let isRecording = false; // Flag to track if we're currently recording an ORF
    
    // Iterate through each character in the sequence
    for (let i = 0; i < aminoAcidSequence.length; i++) {
        const currentChar = aminoAcidSequence[i];
        
        if (currentChar === 'M') {
            // If we were already recording, save the incomplete ORF first
            if (isRecording && currentORF.length > 0) {
                orfs.push(currentORF);
            }
            // Start a new ORF
            currentORF = 'M';
            isRecording = true;
        } else if (currentChar === '*' && isRecording) {
            // End the current ORF (including the stop codon)
            currentORF += '*';
            orfs.push(currentORF);
            currentORF = '';
            isRecording = false;
        } else if (isRecording) {
            // Continue building the current ORF
            currentORF += currentChar;
        }
        // If not recording and not M or *, just continue
    }
    
    // If we ended while still recording (no stop codon found), add the incomplete ORF
    if (isRecording && currentORF.length > 0) {
        orfs.push(currentORF);
    }
    
    // Find the longest ORF
    let longestORF = '';
    let longestLength = 0;
    
    for (let i = 0; i < orfs.length; i++) {
        if (orfs[i].length > longestLength) {
            longestLength = orfs[i].length;
            longestORF = orfs[i];
        }
    }
    
    // Return detailed results
    return {
        longestORF: longestORF,
        length: longestLength,
        allORFs: orfs,
        count: orfs.length
    };
}

// Example usage:
const testSequence = "QWMAKLDGFTQVCTGTDMKLRLPASPETHLDMLRHLYQGCQVVQGNLELTYLPTNASLSFLQDIQEVQGYVLIAHNQVRQVPLQRLRIVRGTQLFEDNYALAVLDNGDPLNNTTPVTGASPGGLRELQLRSLTEILKGGVLIQRNPQLCYQDTILWKDIFHKNNQLALTLIDTNRSRACHPCSPMCKGSRCWGESSEDCQSLTRTVCAGGCARCKGPLPTDCCHEQCAAGCTGPKHSDCLACLHFNHSGICELHCPALVTYNTDTFESMPNPEGRYTFGASCVTACPYNYLSTDVGSCTLVCPLHNQEVTAEDGTQRCEKCSKPCARVCYGLGMEHLREVRAVTSANIQEFAGCKKIFGSLAFLPESFDGDPASNTAPLQPEQLQVFETLEEITGYLYISAWPDSLPDLSVFQNLQVIRGRILHNGAYSLTLQGLGISWLGLRSLRELGSGLALIHHNTHLCFVHTVPWDQLFRNPHQALLHTANRPEDECVGEGLACHQLCARGHCWGPGPTQCVNCSQFLRGQECVEECRVLQGLPREYVNARHCLPCHPECQPQNGSVTCFGPEADQCVACAHYKDPPFCVARCPSGVKPDLSYMPIWKFPDEEGACQPCPINCTHSCVDLDDKGCPAEQRASPLT*M*MKHTRESQ*MLKJHGFDSAMLKJHGFDS*MQWERTYPKCAPAQT*SCGSLPVPRPTWTCSATSTRAARWCRETWNSPTCPPMPACPSCRISRRCRATCSSLTTK*GRSHCRGCGLCEAPSSLRTTMPWPC*TMETR*TIPPLSQGPPQEACGSCSFEASQRS*KEGS*SSGTPSSATRTRFCGRTSSTRTTSWLSH**TPTALGPATPVLRCVRAPAAGERVLRIVRA*RALSVPVAVPAARGHCPLTAAMSSVLPAARAPSTLTAWPASTSTTVASVSCTAQPWSPTTQTRLSPCPIPRAGIHSAPAV*LPVPTTTFLRTWDPAPSSAPCTTKR*QQRMEHSGVRSAASPVPECAMVWAWSTCER*GQLPVPISRSLLAARRSLGAWHFCRRALMGTQPPTLPRSSQSSSKCLRLWKRSQVTYTSQHGRTACLTSASSRTCK*SGDEFCTMAPTR*PCKGWASAGWGCAH*GNWAVDWPSSTITPTSASCTRCPGTSSFGTRTKLCSTLPTGQRTSVWARAWPATSCAPEGTAGVQGPPSVSTAASSFGARSAWRNAEYCRGSPGSM*MPGTVCRATLSVSPRMAQ*PVLDRRLTSVWPVPTIRTLPSAWPAAPAV*NLTSPTCPSGSFQMRRAHASLAPSTAPTPVWTWMTRAAPPSREPAL*R-";
const result = findLongestORF(testSequence);

console.log("Test sequence:", testSequence);
console.log("Longest ORF:", result.longestORF);
console.log("Length:", result.length);
console.log("All ORFs found:", result.allORFs);
console.log("Total ORFs:", result.count);