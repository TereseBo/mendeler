import "./Genebar.scss"

import splitalleles from "../functions/splitalleles"
import { peaTrait } from "../functions/peaTrait"
import genetype from "../functions/genetype"

export default function Genebar({ genes }) {
    console.log(genes)
    console.log(genes.length)
    genes = splitalleles(genes)
    console.log(genes)
    // let geneset = new Set(genes);
    //console.log(geneset)

    let colorgenes=genes.filter(gene=>genetype(gene)===1)
    let shapegenes=genes.filter(gene=>genetype(gene)===2)
console.log(colorgenes)
console.log(shapegenes)
        
    

    return (
        <div className="genebar">
            <div>Upper case letters represent dominant traits and lowercase recessive traits </div>
            
                <div className="traitbox">
                    <div className="traitdesc">
                        <h3>Colors</h3>
                    </div>
                {colorgenes.map((item) =>
                               (
                  
                    < p className="trait"> <span className="geneletter" id={peaTrait(item).charAt(0)}>{peaTrait(item).charAt(0)}</span>{peaTrait(item).substring(1)}</p>
                ))}
                </div>
                <div className="traitbox">
                <div className="traitdesc">
                       <h3>Shapes</h3> 
                    </div>
                {shapegenes.map((item) =>
                               (
                  
                    < p className="trait"> <span className="geneletter" id={peaTrait(item).charAt(0)}>{peaTrait(item).charAt(0)}</span>{peaTrait(item).substring(1)}</p>
                ))}
                </div>




          

        </div >
    )

}
