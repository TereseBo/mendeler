import splitalleles from "../functions/splitalleles"

export default function Genebar({ genes }) {
    console.log(genes)
    console.log(genes.length)
    genes= splitalleles(genes)
 // let geneset = new Set(genes);
  //console.log(geneset)

    return (
        <div className="genebar">
            <div>Upper case letters represent dominant traits and lowercase recessive traits </div>
{/*             {geneset.map(item => {
                <p>{item}</p>
            })} */}
        </div>
    )

}
