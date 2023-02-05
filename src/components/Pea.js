import './Pea.scss'

import createClassNm from '../functions/createClassNm'

export default function Pea({id, gene, callback, lighter}){
    let geneTranslation=createClassNm(gene)
    if(geneTranslation.includes(lighter)){
        geneTranslation= geneTranslation+ ' '+'highlight'
        console.log(geneTranslation)
    }else{
        
    }
    return(
        <div className={geneTranslation}  id={id} onClick={callback} gene={gene}>
        </div>
    )
}