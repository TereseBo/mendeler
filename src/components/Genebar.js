import "./Genebar.scss"

import splitalleles from "../functions/splitalleles"
import peaTrait from "../functions/peaTrait"
import genetype from "../functions/genetype"

export default function Genebar({ genes }) {
    genes = splitalleles(genes)

    let colorgenes = genes.filter(gene => genetype(gene) === 1)
    let shapegenes = genes.filter(gene => genetype(gene) === 2)

    return (
        <div className="genebar">
            <div>
                <p>Upper case letters represent dominant traits, and lowercase recessive traits </p>
                <p>Create new varieties by clicking the peas you want to use as parents, click the cross-button to breed. Can you get new combinations of recessive traits? </p>
            </div>

            <div className="traitbox">
                <div className="traitdesc">
                    <h3>Color genes:</h3>
                </div>
                {colorgenes.map((item) => (
                    <p className="trait"><span className="geneletter" id={peaTrait(item).charAt(0)}>{peaTrait(item).charAt(0)}</span>{peaTrait(item).substring(1)}</p>
                ))}
            </div>

            <div className="traitbox">
                <div className="traitdesc">
                    <h3>Shape genes:</h3>
                </div>
                {shapegenes.map((item) => (
                    <p className="trait"> <span className="geneletter" id={peaTrait(item).charAt(0)}>{peaTrait(item).charAt(0)}</span>{peaTrait(item).substring(1)}</p>
                ))}
            </div>
        </div >
    )
}
