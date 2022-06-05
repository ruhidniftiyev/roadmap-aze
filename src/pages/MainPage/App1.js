import React from "react";
import { render } from 'react-dom';
import Tree from "react-d3-tree";
import "./style1.css";

const svgSquare = {
  shape: "circle",
  shapeProps: {
    width: 20,
    height: 20,
    cx: 1,
    cy: 1,
    r: 13,
    fill: "yellow",
    stroke: "black",
    strokeWidth: 4,
  },
};
const svgPath = {
  shape: "path",
  orientation: "vertical",
  shapeProps: {
    d: "M0,0C70,0 70,-280 140,-280",
    fill: "none",
    stroke: "yellow",
  },
};

const myTreeData = [
  {
    name: "Eve",

    _collapsed: true,

    children: [
      {
        name: "Cain",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: "yellow",
            stroke: "grey",
            strokeWidth: 3,
          },
        },
      },
      {
        name: "seth",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: "red",
            stroke: "grey",
            strokeWidth: 3,
          },
        },

        children: [
          {
            name: "Enos",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
          {
            name: "Noam",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
        ],
      },
      {
        name: "Abel",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: "blue",
            stroke: "grey",
            strokeWidth: 3,
          },
        },
      },
      {
        name: "Awan",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: "green",
            stroke: "grey",
            strokeWidth: 3,
          },
        },
        children: [
          {
            name: "Enoch",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 20,
                height: 20,
                cx: 1,
                cy: 1,
                r: 10,
                fill: "orange",
                stroke: "grey",
                strokeWidth: 3,
                textAnchor: "end",
              },
            },
          },
        ],
      },
      {
        name: "Azura",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 20,
            height: 20,
            cx: 1,
            cy: 1,
            r: 10,
            fill: "green",
            stroke: "grey",
            strokeWidth: 3,
          },
        },
      },
    ],
  },
];

const App1 = () => {
  return (
    <div
      id="treeWrapper"
      style={{ width: "720px", height: "1280px", textAlign: "center" }}
    >
      {/* <ul className="progressbar">
        <li className="active">Step1</li>
        <li>Step2</li>
        <li>Step3 </li>
      </ul> */}
      <h1>FRONTEND TUTORIAL</h1>

      <Tree data={myTreeData} nodeSvgShape={svgSquare} {...svgPath} />
    </div>
  );
};

// render(<App1 />, document.getElementById("root"));

export default App1;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
