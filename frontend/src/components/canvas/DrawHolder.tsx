import React, { useContext, useEffect } from "react";
import CanvasSketch from "./CanvasSketch";
import CanvasStyles from "../../styles/Canvas.module.css";
import { AppContext } from "../../context/AppContext";
import { DrawModel } from "../../models/draw";
import { MdDelete } from "react-icons/md";

interface ImgHolderProps {
    draw: DrawModel,
    withDelete?: boolean
}

export default function DrawHolder({draw, withDelete}: ImgHolderProps) {
  const { drawsContext } = useContext(AppContext);
  const {deleteDraw} = drawsContext
  return (
    <div className={CanvasStyles.ImgHolder}>
                <img
                  className={CanvasStyles.Img}
                  src={draw.img}
                  key={draw._id}
                  width="200px"
                ></img>
                {withDelete && <MdDelete className={CanvasStyles.Delete} onClick={() => {
                  deleteDraw(draw._id)
                }} color="red"/>}
              </div>
  )
}
