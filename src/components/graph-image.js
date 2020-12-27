import React from "react";
import { Graph } from "react-d3-graph";
//
import xray from "../assets/xray.jpg";
const data = {
    nodes: [
        { id: 1, name: "s", x: 100, y: 100, color: "red" },
        { id: 2, name: "Na", x: 200, y: 100, color: "green" },
        { id: 3, name: " ", x: 200, y: 200, color: "green" },
        { id: 4, name: "Pr", x: 250, y: 100, color: "red" },
        { id: 5, name: "P", x: 50, y: 100, color: "orange" },
        { id: 6, name: "SA", x: 250, y: 250, color: "green" },
        { id: 7, name: " ", x: 110, y: 300, color: "green" },
        { id: 8, name: " ", x: 215, y: 50, color: "green" },
    ],
    links: [
        { source: 1, target: 4, breakPoints: [] },
        { source: 2, target: 3, breakPoints: [] },
        { source: 1, target: 5, breakPoints: [] },
        { source: 5, target: 3, breakPoints: [] },
    ]
};

const myConfig = {
    height: 500,
    width: 400,
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    staticGraphWithDragAndDrop: true,

    node: {
        fontSize: 12,
        fontColor: "#FFFF00", 
        highlightFontSize: 14,
        highlightFontWeight: "bold",
        highlightColor: "#FFFF00",
        highlightStrokeColor: "#FFFF00",
        labelProperty: "name",
        size: 100,
        strokeWidth: 1
    },
    link: {
        strokeWidth: 1,
        color: "blue",
        renderLabel: false,
        highlightColor: "same",
        semanticStrokeWidth: true,
        type: "CURVE_SMOOTH",
        fontSize: 10
    },
    d3: {
        gravity: 0,
        linkLength: 180
    }
};

function GraphImage() {
    return (
        <div style={{width: "400px", height: "500px", backgroundImage: `url(${xray})`, backgroundSize: "cover" }}>
            <Graph
                id="graph-id"
                data={data}
                config={myConfig}
            />
        </div>
    );
}

export default GraphImage;