import './Peabar.scss'
import Pea from "./Pea"

export default function Peabar({id, gene}){
    let barId=id+"-container";
    return(
        <div className="peabar" id={barId} gene={gene}>
            <Pea id={id} gene={gene} />
        </div>
    )
}