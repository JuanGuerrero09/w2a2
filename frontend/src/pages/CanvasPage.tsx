import React, { useContext, useEffect } from "react";
import CanvasSketch from "../components/canvas/CanvasSketch";
import CanvasStyles from "../styles/Canvas.module.css";
import { AppContext } from "../context/AppContext";
import { DrawModel } from "../models/draw";
import { MdDelete } from "react-icons/md";

export default function CanvasPage() {
  const { drawsContext } = useContext(AppContext);
  const { draws, getDraws, deleteDraw } = drawsContext;

  useEffect(() => {
    getDraws();
  }, []);

  return (
    <main className={CanvasStyles.CanvasPage}>
      <CanvasSketch />
      <h2>Our Drawings</h2>
      <div className={CanvasStyles.ImgSection}>
        {draws &&
          draws.map((draw: DrawModel) => {
            return (
              <div className={CanvasStyles.ImgHolder}>
                <img
                  className={CanvasStyles.Img}
                  src={draw.img}
                  key={draw._id}
                  width="200px"
                ></img>
                <MdDelete className={CanvasStyles.Delete} onClick={() => {
                  deleteDraw(draw._id)
                }} color="red"/>
              </div>
            );
          })}
      </div>
    </main>
  );
}
