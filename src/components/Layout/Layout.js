import React, { useState, useRef } from "react";
import Header from "../UI/Header/Header";
import Canvas from "../GraphComponents/Canvas";

const Layout = () => {
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [speed, setSpeed] = useState(1000); // store this dfault speed in some config file
  const [adjListOpen, setAdjListOpen] = useState(false);
  const [startNode, setStartNode] = useState("Start Node");

  const speedChange = (e, value) => {
    setSpeed(3000 / value);
  };

  const selectStartNode = (node) => {
    setStartNode(node);
  };

  const startVisualizing = () => {
    setIsVisualizing(true);
  };

  const toggleAdjList = () => {
    setAdjListOpen((prev) => !prev);
  };

  const endVisualizing = () => {
    setIsVisualizing(false);
  };

  const canvasRef = useRef(null);
  return (
    <div>
      <Header
        startNode={startNode}
        selectStartNode={selectStartNode}
        canvasRef={canvasRef}
        startVisualizing={startVisualizing}
        isVisualizing={isVisualizing}
        toggleAdjList={toggleAdjList}
        isAdjListOpen={adjListOpen}
        speedChange={speedChange}
        initialSpeed={speed}
      ></Header>
      <Canvas
        startNode={startNode}
        visualizationStart={startVisualizing}
        visualizationEnd={endVisualizing}
        isVisualizing={isVisualizing}
        ref={canvasRef}
        open={adjListOpen}
        visualizationSpeed={speed}
      />
    </div>
  );
};

export default Layout;
