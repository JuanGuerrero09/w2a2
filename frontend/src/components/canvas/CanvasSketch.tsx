import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { Button, ButtonGroup, Form } from "react-bootstrap";
import CanvasStyles from "../../styles/Canvas.module.css";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { DrawModel } from "../../models/draw";

export default function CanvasSketch() {
  const { drawsContext } = useContext(AppContext)
  const { draws, getDraws, deleteDraw, createDraw } = drawsContext
  console.log(draws)
  const [strokeSize, setStrokeSize] = useState(15);
  const [canvasSize, setCanvasSize] = useState(400);
  const [color, setColor] = useState("#000");
  const sketch = useRef<ReactSketchCanvasRef>(null);
  const [imgArr, setImgArr] = useState<string[]>([])

  useEffect(() => {
    getDraws()
  }, [])

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
      setImgArr([...imgArr, imgSaved])
      console.log(await imgArr)
    }
  };

  return (
    <>
    <section className={CanvasStyles.CanvasDrawSection}>
      <Form.Label>StrokeSize: {strokeSize}</Form.Label>
      <Form.Range
      style={{width: '350px'}}
        min={1}
        max={30}
        defaultValue={15}
        onChange={strokeSizeChange}
      />
      <Form.Control type="color" onChange={colorChange} />
      <ButtonGroup>
        <Button onClick={undoDraw}>Undo</Button>
        <Button onClick={redoDraw}>Redo</Button>
        <Button onClick={clearCanvas}>Clear</Button>
        {/* <Button onClick={saveImg}>Save Image</Button> */}
      </ButtonGroup>
      <ReactSketchCanvas
        className={CanvasStyles.CanvasDraw}
        width={`${canvasSize}px`}
        height={`${canvasSize}px`}
        strokeWidth={strokeSize}
        strokeColor={color}
        ref={sketch}
        />
    </section>
        <Button onClick={saveIMG}>Save Image</Button>
        <h2>Our Drawings</h2>
      <div className={CanvasStyles.ImgSection}>
      {draws && draws.map((draw:DrawModel) => {
          return (<img className={CanvasStyles.Img} src={draw.img} key={draw._id} width='200px'/>)
        })}
      </div>
        </>
  );
}
