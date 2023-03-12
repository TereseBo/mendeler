//TODO:Add basic Mendel information
import './Start.scss'
export default function Start() {
    return (
        <div className="startpg">
            <p>Gregor Mendel (1822-1884) is konw as the father of genetics. His work on genetics was published in 1865
                but did not gain traction until after his death. Through breeding peas (Pisum sativum) he discovered
                the basic principles of monogenic inheritance. By studying the successive generations of pea plants
                he determined the presence of recessive and dominant genes in the poulation and how they were passed down.
            </p>
            <p>
                Just like Mendel you can breed peas in the game-tab. You will find a variety of parent peas to choose from in the left hand side peabar.
                Click on a pea to select it as a parent. You can select two parents at a time, then click the "cross"-button to breed.
                Continue to breed the offspring by choosing them as paretnts for the next generation, or mix in some new traits from the sidebar
                in order to create new pea varieties with unique combination of traits.
            </p>
            <p>
                We have made it easier for you though, you can see the genetic makeup of each pea so you will know which traits are present.
                You will find a list of the possible traits above the game-area. As is customary, the traits are represented by a two letter code, one for each allele.
                The first gene-pair represents the color of the pea, the second the shape. Recessive traits are written in lower case and dominant in uppercase.

            </p>
        </div>
    )
}
