import express from 'express'
import * as DrawController from '../controllers/draw'

const router = express.Router()

router.get('/', DrawController.getDraws)
router.post('/', DrawController.createDraw)
router.post('/:drawId', DrawController.deleteDraw)

export default router