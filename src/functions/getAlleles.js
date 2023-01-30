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
            /*
        geneArr[0]=geneArr[0]+genes[i];
        geneArr[1]=geneArr[1]+genes[i];
        geneArr[2]=geneArr[2]+genes[i+1];
        geneArr[3]=geneArr[3]+genes[i+1];*/
        for(let k=0; k<(nrOfAlleles/2); k++){
            geneArr[k]=geneArr[k]+genes[i]
        }
        for(let k=2; k<nrOfAlleles; k++){
            geneArr[k]=geneArr[k]+genes[i+1]
        }
        }else{/*
            geneArr[0]=geneArr[0]+genes[i];
            geneArr[1]=geneArr[1]+genes[i+1];
            geneArr[2]=geneArr[2]+genes[i];
            geneArr[3]=geneArr[3]+genes[i+1];*/
            for(let k=0; k<=(nrOfAlleles/2); k=k+2){
                geneArr[k]=geneArr[k]+genes[i]
            }
            for(let k=1; k<nrOfAlleles; k=k+2){
                geneArr[k]=geneArr[k]+genes[i+1]
            }
 
        }

        j++;
        
        //TODO: Unfuck this
    }
    console.log(geneArr)
    return geneArr;
}