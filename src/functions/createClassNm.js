import splitGenes from "./splitGenes";
import {peaTrait} from "./peaTrait";
function createClassNm (genes) {
    let classNm="pea ";
    let geneArr=splitGenes(genes);
    geneArr.forEach(gene => {
        classNm+=peaTrait(gene)+" ";
    });


console.log(classNm);
return classNm;
  
}

export{ createClassNm};