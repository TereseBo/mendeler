import "./Game.scss"
import { useState } from "react"
//Components
import Gamearea from "../components/Gamearea"
import Parentmenu from "../components/Parentmenu"
import Genebar from "../components/Genebar"
//Functions
import generateChildGenes from "../functions/generateChildGenes"

export default function Game() {
    const [parentGene1, setParentGene2] = useState("GGcc")
    const [parentGene2, setParentGene1] = useState("yyww")
    const [childgenes, setChildGenes] = useState(["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""])//TODO: Remove preset length of childarr
    const posParents = ['GGRR', 'yyww', 'ooRR', 'KKee', 'bbcc', 'ppRR']

    function crossPeas() {
        setChildGenes(generateChildGenes(parentGene1, parentGene2))
    }
    //On click the parents usestates are updated with the genestring of selected child
    function peaClick(e) {
        if (parentGene1 && parentGene2) {
            setParentGene1(e.target.id)
            setParentGene2('')
        } else {
            setParentGene2(e.target.id)
        }
    }

    //Returns the game-area with child and parentpeas. Nr of children are determined by the number of alleles present
    return (
        <div className="gamecontainer">
            <Genebar className="gameheader" genes={posParents} />
            <div className="gamebox">
                <Parentmenu callback={peaClick} pospArr={posParents} />
                <Gamearea parentGene1={parentGene1} parentGene2={parentGene2} childgenes={childgenes} childfunk={peaClick} buttonfunk={crossPeas} />
            </div>
        </div>
    )
}
