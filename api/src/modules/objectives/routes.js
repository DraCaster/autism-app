import express from 'express'

import {getObjetivesAction, getObjetiveAction, createObjetiveAction, updateObjetiveAction} from './controllers/ObjetiveController'

const router = express.Router()

router.get('/objetives',getObjetivesAction)

router.get('/objetive/:id',getObjetiveAction)

/* router.post('/objetive',createObjetiveAction)

router.put('/objetive/:id',updateObjetiveAction) */

export default router;