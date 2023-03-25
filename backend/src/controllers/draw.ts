import { RequestHandler } from "express";
import DrawModel from "../models/draw";

//TODO ADD ERROR HANDLERS
import createHttpError from "http-errors";
import mongoose from "mongoose";

export const getDraws: RequestHandler = async (req, res, next) => {
  const loggedUserId = req.session.userId;
  try {
    const draws = await DrawModel.find({ author: loggedUserId }).exec();
    res.status(200).json(draws);
  } catch (error) {
    next(error);
  }
};

interface CreateDrawBody {
    img: string
}

export const createDraw: RequestHandler<unknown, unknown, CreateDrawBody, unknown> = async (req, res, next) => {
    const loggedUserId = req.session.userId;
    const img = req.body.img
    try {
      const draws = await DrawModel.create({
        img,
        author: loggedUserId
      });
      res.status(200).json(draws);
    } catch (error) {
      next(error);
    }
  };

  export const deleteDraw: RequestHandler = async (req, res, next) => {
    const drawId = req.params.drawId;
    console.log(drawId)
    try {
        const draw = await DrawModel.findById(drawId).exec();
        await draw?.deleteOne()
        res.status(204).json({"response": "draw successfully deleted"})
      
    } catch (error) {
      next(error);
    }
  };
