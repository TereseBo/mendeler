import getAlleles from "./getAlleles";
import mixGenes from "./mixGenes";

//Returns array containing generated childgenes from parentgenes
export default function generateChildGenes(genes1, genes2) {
   let alleles1 = getAlleles(genes1)
   let alleles2 = getAlleles(genes2)
   let childArr= mixGenes(alleles1,alleles2)
   return childArr;
}