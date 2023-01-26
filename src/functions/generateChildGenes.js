import splitGenes from "./splitGenes";

export default function generateChildGenes(genes1, genes2){
console.log(genes1)
console.log(genes2)

let alleles1 = [];
let alleles2= [];
alleles1=splitGenes(genes1)
alleles2=splitGenes(genes2)
let child1, child2, child3, child4 ='';

/*
for (let i = 0; i < genes1.length; i += 2) {
    alleles.push(genes1.substring(i, i + 2));
}
*/
console.log(alleles1)
alleles1.forEach((gene, index)=>{
    child1=gene.substring(0,1)+alleles2[index].substring(0,1)

})


child1=genes1.substring(0,1)+genes2.substring(0,1)
child2=genes1.substring(1,2)+genes2.substring(0,1)

child3=genes1.substring(0,1)+genes2.substring(1,2)
child4=genes1.substring(1,2)+genes2.substring(1,2)

console.log(child1, child2, child3, child4)
}