import './Parentmenu.scss'

import Peabar from "./Peabar"

export default function Parentmenu({ callback, pospArr, lighter }) {
    return (
        <div className="parentmenu">
            {pospArr.map((item, index) => (
                <Peabar className="peabar" key={index} id={item} gene={item} callback={callback} lighter={lighter}/>
            ))}
        </div>
    )
}