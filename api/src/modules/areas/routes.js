import express from 'express'

import {getAreasAction, getAreaAction, createAreaAction, updateAreaAction} from './controllers/AreaController'

const router = express.Router()

router.get('/areas',getAreasAction)

router.get('/area/:id',getAreaAction)

router.post('/area',createAreaAction)

router.put('/area/:id',updateAreaAction)


export default router;