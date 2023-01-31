import splitGenes from "./splitGenes";
import {peaTrait} from "./peaTrait";
//Creates classes for display of traits
function createClassNm (genes) {
    let classNm="pea ";
    let geneArr=splitGenes(genes);
    geneArr.forEach(gene => {
        classNm+=peaTrait(gene)+" ";
    });


return classNm;
  
}

export{ createClassNm};