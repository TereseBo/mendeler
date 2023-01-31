import alleleSorter from "./alleleSorter";
//Mixes alleles and reurns arr of recombined children
export default function mixGenes(alleles1, alleles2){
    let nrOfChildren=alleles1.length*alleles2.length
    let childArr=[]
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
childArr=childArr.map((gene) => {
let stringArr=gene.split('')
stringArr.sort((a,b)=>alleleSorter(a,b))
gene=stringArr.join('')
return gene
})
return childArr
}