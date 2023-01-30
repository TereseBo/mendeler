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
        <div className="game" >
            <Button callback={crossPeas } pea1={parentGene1} pea2={parentGene2} text="Cross" id="cross-btn" />
            <Peabar className="parent peabar" id="parent1" gene={parentGene1} />
            <Peabar className="parent peabar" id="parent2" gene={parentGene2} />
            <div id="child-container">
            {childgenes.map((item, index)=>(
                            <Peabar className="child peabar" id={index} gene={item} callback={peaClick}/>
            )
            )}
            </div>


        </div>

    )
}
