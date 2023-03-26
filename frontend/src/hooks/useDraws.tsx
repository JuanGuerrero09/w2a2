import React, { useState } from 'react'
import * as Api from "../network/api";
import { DrawModel } from '../models/draw';


export function useDraws() {
  const [draws, setDraws] = useState<DrawModel[] | null>()

  async function getDraws() {
    try {
      const userDraws = await Api.getDraws();
      setDraws(userDraws);
    } catch (error) {
      console.error(error);
      setDraws(null);
    }
  }

  async function createDraw(draw: DrawModel) {
    try {
      const drawCreated = await Api.createDraw(draw);
      setDraws(draws => draws ? [...draws, drawCreated] : [drawCreated])
    } catch (error) {
        console.error(error);
        setDraws(null);
    }
  }


  async function deleteDraw(drawId:string) {
    try {
      console.log(drawId)
      await Api.deleteDraw(drawId)
      setDraws(draws?.filter(Draw => Draw._id !== drawId))
    } catch (error) {
      console.error(error);
      setDraws(null);
    }
  }

  return { draws, getDraws, deleteDraw, createDraw }
}
