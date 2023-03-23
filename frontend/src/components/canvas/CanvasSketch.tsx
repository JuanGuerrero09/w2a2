import * as React from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import { Button } from "react-bootstrap";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
};

export default function CanvasSketch() {
    
  return (
    <>
      <Button />
      <ReactSketchCanvas
        style={styles}
        width="600px"
        height="600px"
        strokeWidth={4}
        strokeColor="red"
      />
    </>
  );
}
