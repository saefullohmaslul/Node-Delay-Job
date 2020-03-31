import { Router } from 'express'
import { delayJobController } from '../controllers'

const router = Router()

router.get('/hello', delayJobController.get)
router.get('/jobs', delayJobController.getJob)

export default router