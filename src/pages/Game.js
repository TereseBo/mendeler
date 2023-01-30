import "./Game.scss"
import { useState } from "react"
//Components
import Peabar from "../components/Peabar"
import Button from "../components/Button"
//Functions
//import crossPeas from "../functions/crossPeas"
import generateChildGenes from "../functions/generateChildGenes"





export default function Game() {
    const [parentGene1, setParentGene2] = useState("GGSS")
    const [parentGene2, setParentGene1] = useState("yyww")
    const [childgenes, setChildGenes] = useState(["","","","","","","","","","","","","","","",""])

    function crossPeas(){
        setChildGenes(generateChildGenes(parentGene1, parentGene2))
    }

    function peaClick(e){
        console.log("pea clicked")
        console.log(e.target.id)
        if(parentGene1 && parentGene2){
            setParentGene1(childgenes[e.target.id])
            setParentGene2('')
           console.log("both parents are set")
        }else if(parentGene1){
            setParentGene2(childgenes[e.target.id])
            console.log("only parent 1 is set")}
    }

    return (
        <div className="game">
            <Button callback={crossPeas } pea1={parentGene1} pea2={parentGene2} text="Cross" id="cross-btn" />
            <Peabar className="parent" id="parent1" gene={parentGene1} />
            <Peabar className="parent" id="parent2" gene={parentGene2} />
            <Peabar className="child" id="0" gene={childgenes[0]} callback={peaClick}/>
            <Peabar className="child" id="1" gene={childgenes[1]} callback={peaClick}/>
            <Peabar className="child" id="2" gene={childgenes[2]} callback={peaClick}/>
            <Peabar className="child" id="3" gene={childgenes[3]} callback={peaClick}/>
            <Peabar className="child" id="4" gene={childgenes[4]} callback={peaClick}/>
            <Peabar className="child" id="5" gene={childgenes[5]} callback={peaClick}/>
            <Peabar className="child" id="6" gene={childgenes[6]} callback={peaClick}/>
            <Peabar className="child" id="7" gene={childgenes[7]} callback={peaClick}/>
            <Peabar className="child" id="8" gene={childgenes[8]} callback={peaClick}/>
            <Peabar className="child" id="9" gene={childgenes[9]} callback={peaClick}/>
            <Peabar className="child" id="10" gene={childgenes[10]} callback={peaClick}/>
            <Peabar className="child" id="11" gene={childgenes[11]} callback={peaClick}/>
            <Peabar className="child" id="12" gene={childgenes[12]} callback={peaClick}/>
            <Peabar className="child" id="13" gene={childgenes[13]} callback={peaClick}/>
            <Peabar className="child" id="14" gene={childgenes[14]} callback={peaClick}/>
            <Peabar className="child" id="15" gene={childgenes[15]} callback={peaClick}/>

        </div>

    )
}
