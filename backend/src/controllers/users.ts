import {RequestHandler} from 'express'
import createHttpError from 'http-errors'
import UserModel from '../models/user'
import bcrypt from 'bcrypt'

export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    const currentUserId = req.session.userId
    console.log(currentUserId)
    try {
        if(!currentUserId){
            throw createHttpError(401, 'User not authenticated')
        }
        const user = await UserModel.findById(currentUserId).exec()
        res.status(200).json(user)
    } catch (error) {
        next(error)
    }
}

interface SignUpBody {
    username?: string,
    partnername: string,
    email?: string,
    password?: string,
}

export const signUp: RequestHandler<unknown, unknown, SignUpBody, unknown> =async (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const partnername = req.body.partnername

    try {
        if (!username || !email || !password){
            throw createHttpError(400, 'Parameters missing')
        }
        const existingUsername = await UserModel.findOne({username}).exec()
        if (existingUsername){
            throw createHttpError(409, 'Username already taken. Please choose a different one or log in instead.')
        }
        const existingEmail = await UserModel.findOne({email}).exec()
        if (existingEmail){
            throw createHttpError(409, 'An account with that email already exist, please log in instead')
        }
        const cryptedPassword = await bcrypt.hash(password, 10)

        const newUser = await UserModel.create({
            username,
            email,
            partnername,
            password: cryptedPassword,
        })

        req.session.userId = newUser._id

        console.log(req.session.userId)

        res.status(201).json(newUser)

    } catch (error) {
        next(error)
    }

}

interface LoginBody {
    username?: string,
    password?: string
}

export const login: RequestHandler<unknown, unknown, LoginBody, unknown> = async (req, res, next) => {
    const username = req.body.username
    const password = req.body.password

    try {
        if (!username || !password) {
            throw createHttpError(400, "Parameters missing");
        }

        const user = await UserModel.findOne({ username }).select("+password +email").exec();

        //TODO CHANGE TO INVALID CREDENTIALS
        if (!user) {
            throw createHttpError(401, "User not found");
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if(!passwordMatch){
            throw createHttpError(401, 'Wrong password')
        }

        req.session.userId = user._id
        res.status(201).json(user)

    } catch (error) {
        next(error)
    }
}

interface PartnerBody{
    partnerUsername: string
}
//TODO PENDIENTE PARA TERMINAR 
export const addPartner: RequestHandler<unknown, unknown, PartnerBody, unknown> = async (req, res, next) => {
    const partnerUsername = req.body.partnerUsername
    const currentUserId = req.session.userId
    try {
        const user = await UserModel.findById(currentUserId).exec()
        const partner = await UserModel.findOne({username: partnerUsername}).exec()
        if (!partner) {
            throw createHttpError(404, "User not found");
        }
        if (!user) {
            throw createHttpError(404, "User not found");
        }
        if (user.partner) {
            throw createHttpError(404, "User already has partner");
        }
        // const updatedUser = {...user, partner: partner}
        user.partner = partner._id
        partner.partner = currentUserId

        await user.save()
        await partner.save()

        const userandpartner = {user, partner}
        res.status(201).json(userandpartner)
    } catch (error) {
        next(error)
    }
}

export const removePartner: RequestHandler = async (req, res, next) => {
    const currentUserId = req.session.userId
    try {
        const user = await UserModel.findById(currentUserId).exec()
        if (!user) {
            throw createHttpError(404, "User not found");
        }
        if (!user.partner) {
            throw createHttpError(404, "User doesn't have partner");
        }
        // const updatedUser = {...user, partner: partner}
        user.partner = undefined
        const userUpdated = await user.save()
        res.status(201).json(userUpdated)
    } catch (error) {
        next(error)
    }
}

export const logout:RequestHandler = async(req, res, next) => {
    req.session.destroy(error => {
        if (error){
            next(error)
        }else{
            res.sendStatus(200)
        }
    })
}

