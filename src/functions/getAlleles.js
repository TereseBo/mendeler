export default function getAlleles (genes) {
    let geneArr=[];
    let nrOfAlleles=genes.length;
    for(let i=0; i<nrOfAlleles; i++){
        geneArr[i]='';
    }
    console.log(nrOfAlleles)
    let j=0;
    for (let i=0; i<genes.length; i=i+2) {
        if(j%2===0){
        for(let k=0; k<(nrOfAlleles/2); k++){
            geneArr[k]=geneArr[k]+genes[i]
        }
        for(let k=2; k<nrOfAlleles; k++){
            geneArr[k]=geneArr[k]+genes[i+1]
        }
        }else{
            for(let k=0; k<=(nrOfAlleles/2); k=k+2){
                geneArr[k]=geneArr[k]+genes[i]
            }
            for(let k=1; k<nrOfAlleles; k=k+2){
                geneArr[k]=geneArr[k]+genes[i+1]
            }
        }
        j++;
    }
    return geneArr;
}