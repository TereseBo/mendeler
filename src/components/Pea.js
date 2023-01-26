import './Pea.scss'

import{createClassNm} from '../functions/createClassNm'

export default function Pea({id, gene}){

    return(
        <div className={createClassNm(gene)}  id={id}>
        </div>
    )
}