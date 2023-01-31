//Returns arr of possible alleles
export default function getAlleles (genes) {
    let alleleArr=[];
    let nrOfAlleles=genes.length;
    for(let i=0; i<nrOfAlleles; i++){
        alleleArr[i]='';
    }
    let j=0;
    for (let i=0; i<genes.length; i=i+2) {
        if(j%2===0){
        for(let k=0; k<(nrOfAlleles/2); k++){
            alleleArr[k]=alleleArr[k]+genes[i]
        }
        for(let k=2; k<nrOfAlleles; k++){
            alleleArr[k]=alleleArr[k]+genes[i+1]
        }
        }else{
            for(let k=0; k<=(nrOfAlleles/2); k=k+2){
                alleleArr[k]=alleleArr[k]+genes[i]
            }
            for(let k=1; k<nrOfAlleles; k=k+2){
                alleleArr[k]=alleleArr[k]+genes[i+1]
            }
        }
        j++;
    }
    return alleleArr;
}