import alleleSorter from "./alleleSorter";
import caseinsort from "./caseinssort";

export default function splitalleles(genes){

    let geneletters= new Set();

    genes.forEach(element => {
        console.log(element.length)
       for (let i=0; i<element.length; i++){
            geneletters.add(element.substring(i,i+1))
              } 
        
    });
    geneletters=Array.from(geneletters)
    console.log(geneletters)
    geneletters.sort((a,b)=>caseinsort(a,b))
    console.log(geneletters)
    geneletters.sort((a,b)=>alleleSorter(a,b))

/*     console.log(genes)
    console.log(genes.length)
    let geneset= [];
    genes.array.forEach(element => {
        for (let i=0; i<element.length; i++){
      geneset.push(element.substring(i,i+1))
        }
        
    });
    console.log(geneset) */
    console.log(geneletters)
    return geneletters;
}