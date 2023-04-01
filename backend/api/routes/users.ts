import express from "express";
import * as UserController from '../controllers/users'

const router = express.Router()
router.get('/', UserController.getAuthenticatedUser)

router.post('/signup', UserController.signUp)

router.post('/login', UserController.login)

router.post('/logout', UserController.logout)

router.get('/getpartner', UserController.getPartner)

router.post('/addpartner', UserController.addPartner)

router.post('/removepartner', UserController.removePartner)

export default router