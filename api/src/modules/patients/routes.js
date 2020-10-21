import express from 'express'

import {getPatientsAction, getPatientAction, createPatientAction, updatePatientAction} from './controllers/PatientController'

const router = express.Router()

router.get('/patients',getPatientsAction)

router.get('/patient/:id',getPatientAction)

router.post('/patient',createPatientAction)

router.put('/patient/:id',updatePatientAction)

export default router;