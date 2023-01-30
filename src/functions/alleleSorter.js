import geneType from "./genetype";

export default function alleleSorter(a, b) {
    let allelePosA = geneType(a);
    let allelePosB = geneType(b);
    let pos = 0;

    if (allelePosA === allelePosB) {
        pos = 0;
    } else if (allelePosA < allelePosB) {
        pos = -1;
    } else if (allelePosA > allelePosB) {
        pos = 1;
    }
    return pos;

}