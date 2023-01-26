import "./Game.scss"
import { useState } from "react"
//Components
import Peabar from "../components/Peabar"
import Button from "../components/Button"
//Functions
//import crossPeas from "../functions/crossPeas"
import generateChildGenes from "../functions/generateChildGenes"





export default function Game() {
    const [parentGene1, setParentGene1] = useState("GGSS")
    const [parentGene2, setParentGene2] = useState("yyww")
    const [childGene1, setChildGene1] = useState("")
    const [childGene2, setChildGene2] = useState("")
    const [childGene3, setChildGene3] = useState("")
    const [childGene4, setChildGene4] = useState("")

    function crossPeas(){
        generateChildGenes(parentGene1, parentGene2)
    }

    return (
        <div className="game">
            <Button callback={crossPeas } pea1={parentGene1} pea2={parentGene2} text="Cross" id="cross-btn" />
            <Peabar className="parent" id="parent1" gene={parentGene1}/>
            <Peabar className="parent" id="parent2" gene={parentGene2} />
            <Peabar className="child" id="child1" gene={childGene1}/>
            <Peabar className="child" id="child2" gene={childGene2} />
            <Peabar className="child" id="child3" gene={childGene3} />
            <Peabar className="child" id="child4" gene={childGene4}/>



        </div>

    )
}
