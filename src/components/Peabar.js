import './Peabar.scss'
import Pea from "./Pea"

export default function Peabar({id}){
    let barId=id+"-container";
    return(
        <div className="peabar" id={barId}>
            <Pea id={id} />
        </div>
    )
}