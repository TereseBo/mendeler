import splitGenes from "./splitGenes";
import getAlleles from "./getAlleles";
import alleleSorter from "./alleleSorter";

export default function generateChildGenes(genes1, genes2) {
    console.log(genes1)
    console.log(genes2)


   let alleles1 = getAlleles(genes1)
   let alleles2 = getAlleles(genes2)
   console.log(alleles1)
   console.log(alleles2)
    alleles2 = getAlleles(genes2)
    let nrOfChildren=alleles1.length*alleles2.length;

    let childArr= [];
    for(let i=0; i<nrOfChildren; i++){
        childArr[i]='';
    }
    let k=0;
    for(let i=0; i<alleles1.length; i++){
        for(let j=0; j<alleles2.length; j++){
            childArr[k]=alleles1[i]+alleles2[j]
            k++;
        }
    }
console.log(childArr)
childArr=childArr.map((gene) => {
    console.log(gene)
    let stringArr=gene.split('')
    stringArr.sort((a,b)=>alleleSorter(a,b))
    //console.log(temp)
    console.log(stringArr)
    gene=stringArr.join('')
    console.log(gene)
return gene
    
    
})
console.log(childArr)

    return childArr;
}