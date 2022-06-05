import React from "react";
import { render } from 'react-dom';
import Tree from "react-d3-tree";
import "./style1.css";

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 100,
    height: 50,
    x: -50,
    y: -30,
    fill: "#ff0",
    stroke: "white",
    strokeWidth: 1,
  },
};
const svgPath = {
  shape: "path",
  orientation: "vertical",
  translate: { x: 500, y: 50 },
  shapeProps: {
    d: "M0,0C70,0 70,-280 140,-280",
    fill: "white",
    stroke: "white",
    
  },
};

const myTreeData = [
  {
    name: "Frontend",

    _collapsed: true,

    children: [
      {
        name: "HTML",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 40,
            height: 40,
            cx: 1,
            cy: 1,
            r: 20,
            fill: "red",
            stroke: "grey",
            strokeWidth: 3,
          },
        },

        children: [
          {
            name: "Learn the basics",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
          {
            name: "Forms and Validations",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
          {
            name: "Convention and Best practices",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
        ],
      },
      {
        name: "JavaScript",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 40,
            height: 40,
            cx: 1,
            cy: 1,
            r: 20,
            fill: "blue",
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
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
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
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
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
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "purple",
                stroke: "grey",
                strokeWidth: 3,
              },
            },
          },
        ],
      },
      {
        name: "CSS",
        _collapsed: true,
        nodeSvgShape: {
          shape: "circle",
          shapeProps: {
            width: 40,
            height: 40,
            cx: 1,
            cy: 1,
            r: 20,
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
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "orange",
                stroke: "grey",
                strokeWidth: 3,
                textAnchor: "end",
              },
            },
          },
          {
            name: "Enoch",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "orange",
                stroke: "grey",
                strokeWidth: 3,
                textAnchor: "end",
              },
            },
          },
          {
            name: "Enoch",
            nodeSvgShape: {
              shape: "circle",
              shapeProps: {
                width: 40,
                height: 40,
                cx: 1,
                cy: 1,
                r: 20,
                fill: "orange",
                stroke: "grey",
                strokeWidth: 3,
                textAnchor: "end",
              },
            },
          },
        ],
      },
    ],
  },
];

const App1 = () => {
  return (
    <div
      id="treeWrapper"
      style={{ width: "1280px", height: "720px", textAlign: "center" }}
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


export default App1;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );
