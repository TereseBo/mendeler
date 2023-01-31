//Splits genestring into 2 letter gene pairs
export default function splitGenes(genes) {
    let geneArr=[];
    for (let i=0; i<genes.length; i=i+2) {
        geneArr.push(genes.substring(i,i+2));
    }
    return geneArr;
}