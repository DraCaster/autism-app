import express from 'express'

import {getObservationsAction, getObservationAction, createObservationAction, updateObservationAction} from './controllers/ObservationController'

const router = express.Router()

router.get('/observations',getObservationsAction)

router.get('/observation/:id',getObservationAction)

/* router.post('/observation',createObservationAction)

router.put('/observation/:id',updateObservationAction)
 */

export default router;