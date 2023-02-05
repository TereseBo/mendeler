//Returns arr of possible alleles in gametes
export default function getAlleles (genes) {
    let alleleArr=[];
    let diploidCount=genes.length;
    let haploidCount=genes.length/2

    for(let i=0; i<diploidCount; i++){
        alleleArr[i]='';
    }

    let j=0;
    for (let i=0; i<diploidCount; i+=2) {
        if(j%2===0){
        for(let k=0; k<(haploidCount); k++){
            alleleArr[k]=alleleArr[k]+genes[i]
        }
        for(let k=2; k<diploidCount; k++){
            alleleArr[k]=alleleArr[k]+genes[i+1]
        }
        }else{
            for(let k=0; k<=(haploidCount); k+=2){
                alleleArr[k]=alleleArr[k]+genes[i]
            }
            for(let k=1; k<diploidCount; k+=2){
                alleleArr[k]=alleleArr[k]+genes[i+1]
            }
        }
        j++;
    }
    return alleleArr;
}