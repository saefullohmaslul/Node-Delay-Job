import { Router } from 'express'
import { delayJobController } from '../controllers'

const router = Router()

router.get('/hello', delayJobController.get)

export default router