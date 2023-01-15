export default function splitGenes(genes) {
    console.log(genes);
    let geneArr=[];
    for (let i=0; i<genes.length; i=i+2) {
        geneArr.push(genes.substring(i,i+2));
    }
    return geneArr;
}