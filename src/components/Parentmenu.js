import './Parentmenu.scss'

import Peabar from "./Peabar"


export default function Parentmenu({ className, id, gene, callback, pospArr }) {
    return (
        <div className="parentmenu">
            {pospArr.map((item, index) => (
                <Peabar className="peabar" key={index} id={item} gene={item} callback={callback} />
            )
            )}
        </div>

    )
}