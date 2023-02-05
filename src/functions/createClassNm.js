import splitGenes from "./splitGenes";
import peaTrait from "./peaTrait";

//Creates classnames for display of traits
export default function createClassNm(genes) {
    let classNm = "pea ";
    let geneArr = splitGenes(genes);
    
    geneArr.forEach(gene => {
        classNm += peaTrait(gene) + " ";
    });
    return classNm;
}
