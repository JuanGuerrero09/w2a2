import React, { useContext, useEffect } from "react";
import CanvasSketch from "./CanvasSketch";
import CanvasStyles from "../../styles/Canvas.module.css";
import { AppContext } from "../../context/AppContext";
import { DrawModel } from "../../models/draw";
import { MdDelete } from "react-icons/md";

interface ImgHolderProps {
    draw: DrawModel,
    withDelete?: boolean
    onClickEvent?: () => void
}

export default function DrawHolder({draw, withDelete, onClickEvent}: ImgHolderProps) {
  const { drawsContext, partner } = useContext(AppContext);
  const {deleteDraw} = drawsContext
  const partnerId = partner? partner._id : null
  return (
    <div onClick={onClickEvent} className={CanvasStyles.ImgHolder} style={{width: onClickEvent? '285px' : "200px"}}>
                <img
                  className={CanvasStyles.Img}
                  src={draw.img}
                  key={draw._id}
                  width={onClickEvent? '283px' : "200px"}
                  style={{border: `1px solid ${draw.author === partnerId? 'red':'blue'}`}}
                ></img>
                {withDelete && <MdDelete className={CanvasStyles.Delete} onClick={() => {
                  deleteDraw(draw._id)
                }} color="red"/>}
              </div>
  )
}
