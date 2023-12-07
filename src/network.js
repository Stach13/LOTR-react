import React from "react";
import Final_network from "./images/background-img/Final_network.png";
import ORG_network from "./images/background-img/ORG-network.png";

const Graph = () => {
    return (
        <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <use type="text/javascript" xlinkHref="interact.js"/>
        <g transform="translate(130, 50)">
        <g id="ORG">
        <line x1="0"
    y1="50"
    x2="479.686593151479977"
    y2="50"
    stroke="green"
    strokeWidth="20" className="displayBars" id="l-ORG">
       <animate attributeName="x2" fill="freeze" from="0" to="479.686593151479977" dur="2s"></animate>
        </line>
    <text x="-90" y="50" style={{stroke: 'black'}} className="textButton" id="t-ORG" fontFamily="Calibri">ORG</text>
</g>
    <g id="GPE">
        <line x1="0"
              y1="100"
              x2="236.796285548461985"
              y2="100"
              stroke="orange"
              strokeWidth="20" className="displayBars" id="l-GPE">
            <animate attributeName="x2" from="0" to="236.796285548461985" dur="10s"></animate>
        </line>
        <text x="-90" y="100" style={{stroke: "black"}} className="textButton" id="t-GPE" fontFamily="Calibri">GPE</text>
    </g>
    <g id="NORP">
        <line x1="0"
              y1="150"
              x2="14.219384793964016"
              y2="150"
              stroke="darkblue"
              strokeWidth="20" className="displayBars" id="l-NORP">
           <animate attributeName="Width" from="0" to="14.219384793964016" dur="2s"></animate>
        </line>
        <text x="-90" y="150" style={{stroke: "black"}} className="textButton" id="t-NORP" fontFamily="Calibri">NORP</text>
    </g>
    <g id="LOC">
        <line x1="0"
              y1="200"
              x2="211.404526987811956"
              y2="200"
              stroke="aqua"
              strokeWidth="20" className="displayBars" id="l-LOC">
           <animate attributeName="Width" from="0" to="211.404526987811956" dur="2s"></animate>
        </line>
        <text x="-90" y="200" style={{stroke: "black"}} className="textButton" id="t-LOC" fontFamily="Calibri">LOC</text>
    </g>
    <g id="FAC">
        <line x1="0"
              y1="250"
              x2="57.893209518282066"
              y2="250"
              stroke="lightyellow"
              strokeWidth="20" className="displayBars" id="l-FAC">
          <animate attributeName="Width" from="0" to="57.893209518282066" dur="2s"></animate>
        </line>
        <text x="-90" y="250" style={{stroke: "black"}} className="textButton" id="t-FAC" fontFamily="Calibri">FAC</text>
    </g>
    <line x1="0"
          y1="300"
          x2="500"
          y2="300"
          stroke="black"
          strokeWidth="3"/>
    {/* X axis*/}
    <line x1="0"
          y1="300"
          x2="0"
          y2="0"
          stroke="black"
          strokeWidth="3"/>
     {/* Y axis */}
    <g>
        <line x1="100"
              y1="325"
              x2="100"
              y2="300"
              stroke="black"
              strokeWidth="1"/>
        <text style={{textAnchor: "middle"}} x="100" y="350">10%</text>
    </g>
    <g>
        <line x1="200"
              y1="325"
              x2="200"
              y2="300"
              stroke="black"
              strokeWidth="1"/>
        <text style={{textAnchor: "middle"}} x="200" y="350">20%</text>
    </g>
    <g>
        <line x1="300"
              y1="325"
              x2="300"
              y2="300"
              stroke="black"
              strokeWidth="1"/>
        <text style={{textAnchor: "middle"}} x="300" y="350">30%</text>
    </g>
    <g>
        <line x1="400"
              y1="325"
              x2="400"
              y2="300"
              stroke="black"
              strokeWidth="1"/>
        <text style={{textAnchor: "middle"}} x="400" y="350">40%</text>
    </g>
    <g>
        <line x1="500"
              y1="325"
              x2="500"
              y2="300"
              stroke="black"
              strokeWidth="1"/>
        <text style={{textAnchor: "middle"}} x="500" y="350">50%</text>
    </g>
</g>

</svg>
        </div>
)
}

const Network = () => {
    return (
    <body>

    <div className="title-img">
        <div className="block">
            <h1 className="pg-heading">Visualizations</h1>
            <h2>SVG Graph</h2>
            <div className="object">
               {/* <object type="image/svg+xml" data={graph()} className="svg"></object>*/}
                <Graph />
                <p className="object">This graph depicts the relevance and repetition of how Spacy named entities interact with the Lord of the Rings terms. As you can see there are more organizations in the books than any other NER, consisting
                    roughly around 50% of all Spacy entities. Obviously on the y-axis of the chart you have Spacy groups, and the x-axis projects the percentage of how many times certain Spacy entities are being used. </p>
            </div>
            <h2>Cytoscape Network</h2>
            <figure>
                <img src={Final_network} alt=""/>
                <figcaption>This network essentially summarizes all three books "The Fellowship of the Ring", "The Two Towers", and "The Return of the King", using Spacy's Natural
                    Language Processor. This shows the relationships each organization, location, Nationality, famous infrastructure, and Country/Realm has with one another into
                    one single defining network. I color coded the pathways with purple indicating the connections toward the Fellowship of the Ring, green for The Two Towers,
                    and Red for The Return of the King.</figcaption>
            </figure>
            <figure>
                <img src={ORG_network} alt=""/>
                <figcaption>This network shows how all the Organization entities interact with all three books. This probably isn't the best visualization since all the
                    nodes and edges are bunched up together, but it shows how many Organizations are mentioned in relation to Tolkien's Lord of the Rings. The purple edge describes connections to The Fellowship.
                    Red describes connections to the Return of the King, and the Green describes connections to The Twin Towers.</figcaption>
            </figure>
        </div>
    </div>
    </body>
    );
}

export default Network;