import "./Gamearea.scss"

import Peabar from "./Peabar"
import Button from "./Button"

export default function Gamearea({parentGene1, parentGene2, childgenes, childfunk, buttonfunk, lighter}){
    return(
        <div className="gamearea" >
            <Button callback={ buttonfunk } pea1={parentGene1} pea2={parentGene2} text="Cross" id="cross-btn" />
            <Peabar className="parent peabar" id="parent1" gene={parentGene1} lighter={lighter}/>
            <Peabar className="parent peabar" id="parent2" gene={parentGene2} lighter={lighter}/>
            <div id="child-container">
                {childgenes.map((item, index)=>(
                    <Peabar className="child peabar" key={index}id={item} gene={item} callback={childfunk} lighter={lighter}/>
                ))}
            </div>
        </div>
    )
}