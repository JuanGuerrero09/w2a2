import { ChangeEvent, useContext, useRef, useState } from "react";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { AppContext } from "../../context/AppContext";
import { IoMdUndo, IoMdRedo } from 'react-icons/io'
import { BsEraser, BsPencil } from 'react-icons/bs'
import CanvasStyles from "../../styles/Canvas.module.css";

export default function CanvasSketch() {
  const { drawsContext } = useContext(AppContext)
  const { createDraw } = drawsContext
  const [strokeSize, setStrokeSize] = useState(15);
  const [canvasSize, setCanvasSize] = useState(400);
  const [color, setColor] = useState("#000");
  const [isErasing, setIsErasing] = useState(false);
  const sketch = useRef<ReactSketchCanvasRef>(null);

  

  const strokeSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);
    setStrokeSize(currentValue);
  };
  const colorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setColor(currentValue);
  };

  const undoDraw = () => {
    const draw = sketch.current
    if (draw !== null) {
      draw.undo();
    }
  };

  const toggleEraser = () => {
    const draw = sketch.current
    const eraserToggle = !isErasing
    if (draw !== null) {
      draw.eraseMode(!isErasing);
      setIsErasing(eraserToggle)
    }
  };
  const redoDraw = () => {
    const draw = sketch.current
    if (draw !== null) {
      draw.redo();
    }
  };
  const clearCanvas = () => {
    const draw = sketch.current
    if (draw !== null) {
      draw.clearCanvas();
    }
  };

  const saveIMG = async () => {
    const drawIMG = sketch.current
    if (drawIMG !== null) {
      const imgSaved = await drawIMG.exportImage("png");
      await createDraw({img: imgSaved})
      drawIMG.clearCanvas()
    }
  };

  return (
    <>
    <section className={CanvasStyles.CanvasDrawSection}>
      <Form.Label>{isErasing? 'Eraser': 'Pencil'} Size: {strokeSize}</Form.Label>
      <Form.Range
      style={{width: '250px'}}
        min={1}
        max={30}
        defaultValue={15}
        onChange={strokeSizeChange}
      />
      <div className={CanvasStyles.CanvasBtnSection}>
      <Form.Control type="color" onChange={colorChange} />
        <Button onClick={clearCanvas}>Clear</Button>
      <ButtonGroup>
        <Button onClick={undoDraw}><IoMdUndo/></Button>
        <Button onClick={redoDraw}><IoMdRedo/></Button>
      </ButtonGroup>
        <Button onClick={toggleEraser}>{isErasing ? <BsEraser/> : <BsPencil/>}</Button>
      </div>
      <ReactSketchCanvas
        className={CanvasStyles.CanvasDraw}
        width={`${canvasSize}px`}
        height={`${canvasSize}px`}
        strokeWidth={strokeSize}
        eraserWidth={strokeSize}
        strokeColor={color}
        ref={sketch}
        />
    </section>
        <Button onClick={saveIMG}>Save Image</Button>
        
        </>
  );
}
