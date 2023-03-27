import React, { useContext, useEffect } from "react";
import CanvasSketch from "../components/canvas/CanvasSketch";
import CanvasStyles from "../styles/Canvas.module.css";
import { AppContext } from "../context/AppContext";
import { DrawModel } from "../models/draw";
import { MdDelete } from "react-icons/md";
import DrawHolder from "../components/canvas/DrawHolder";

export default function CanvasPage() {
  const { drawsContext } = useContext(AppContext);
  const { draws, getDraws } = drawsContext;

  useEffect(() => {
    !draws && getDraws();
  }, []);

  return (
    <main className={CanvasStyles.CanvasPage}>
      <CanvasSketch />
      <h2>Our Drawings</h2>
      <div className={CanvasStyles.ImgSection}>
        {draws &&
          draws.map((draw: DrawModel) => {
            return (
              <DrawHolder draw={draw} withDelete/>
            );
          })}
      </div>
    </main>
  );
}
