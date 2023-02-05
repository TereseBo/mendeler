import './Pea.scss'

import createClassNm from '../functions/createClassNm'

export default function Pea({id, gene, callback}){
    return(
        <div className={createClassNm(gene)}  id={id} onClick={callback} gene={gene}>
        </div>
    )
}