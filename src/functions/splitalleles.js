import alleleSorter from "./alleleSorter";
import caseinsort from "./caseinssort";

//Splits genome to single letters
export default function splitalleles(genes) {
    let geneletters = new Set();

    genes.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            geneletters.add(element.substring(i, i + 1))
        }
    });
    geneletters = Array.from(geneletters)
    geneletters.sort((a, b) => caseinsort(a, b))
    geneletters.sort((a, b) => alleleSorter(a, b))

    return geneletters;
}