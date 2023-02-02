import "./Game.scss"
import { useState } from "react"
//Components
import Peabar from "../components/Peabar"
import Button from "../components/Button"
import Gamearea from "../components/Gamearea"
import Parentmenu from "../components/Parentmenu"
//Functions
//import crossPeas from "../functions/crossPeas"
//TODO: Add sidebar with possible parents to pick from, update css and related functions accordingly
import generateChildGenes from "../functions/generateChildGenes"





export default function Game() {
    const [parentGene1, setParentGene2] = useState("GGcc")
    const [parentGene2, setParentGene1] = useState("yyww")
    const [childgenes, setChildGenes] = useState(["","","","","","","","","","","","","","","",""])//TODO: Remove preset length of childarr
    const posParents=['oocc', 'bbww', 'KKSS', 'ppcc']
    function crossPeas(){
        setChildGenes(generateChildGenes(parentGene1, parentGene2))
    }
    //On click the parents usestates are updated with the genestring of selected child
    function peaClick(e){
        console.log("pea clicked")
        console.log(e.target.id)
        console.log(parentGene1)
        console.log(parentGene2)
        if(parentGene1 && parentGene2){
            setParentGene1(childgenes[e.target.id])
            setParentGene2('')
           console.log("both parents are set")
        }else {

            setParentGene2(childgenes[e.target.id])
            console.log("only parent 1 is set")}
    }


//Returns the game-area with child and parentpeas. Nr of children are determined by the number of alleles present
    return (
        <div className="gamebox">
            <Parentmenu callback={peaClick} pospArr={posParents}/>
        <Gamearea parentGene1={parentGene1} parentGene2={parentGene2} childgenes={childgenes} childfunk={peaClick} buttonfunk={crossPeas}/>
        </div>
        /*
        <div className="game" >
            <Button callback={crossPeas } pea1={parentGene1} pea2={parentGene2} text="Cross" id="cross-btn" />
            <Peabar className="parent peabar" id="parent1" gene={parentGene1} />
            <Peabar className="parent peabar" id="parent2" gene={parentGene2} />
            <div id="1">
            {childgenes.map((item, index)=>(
                            <Peabar className="child peabar" key={index}id={index} gene={item} callback={peaClick}/>
            )
            )}
            </div>


        </div>*/

    )
}
