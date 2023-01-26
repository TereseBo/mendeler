import splitGenes from "./splitGenes";
import {peaTrait} from "./peaTrait";
function createClassNm (genes) {
    let classNm="pea ";
    let geneArr=splitGenes(genes);
    geneArr.forEach(gene => {
        classNm+=peaTrait(gene)+" ";
    });


return classNm;
  
}

export{ createClassNm};