import './Peabar.scss'

import Pea from "./Pea"

export default function Peabar({className, id, gene, callback}){
    let barId=id+"-container"
    
    return(
        <div className={className} id={barId} gene={gene}>
            <Pea id={id} gene={gene} callback={callback} />
            <p>{gene}</p>
        </div>
    )
}