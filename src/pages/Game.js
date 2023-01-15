 import "./Game.scss"
 
 import Peabar from "../components/Peabar"
import Button from "../components/Button"

 export default function Game(){
    return(
        <div className="game">
        <Button callback={()=>{console.log("clicked")}} text="Cross" id="cross-btn"/>
        <Peabar className="parent" id="parent1"/>
        <Peabar className="parent" id="parent2"/>
        <Peabar className="child" id="child1"/>
        <Peabar className="child" id="child2"/>
        <Peabar className="child" id="child3"/>
        <Peabar className="child" id="child4"/>


        
        </div>

    )
}
