import express from 'express'

import {getEvaluationsAction, getEvaluationAction, createEvaluationAction, updateEvaluationAction} from './controllers/EvaluationController'

const router = express.Router()

router.get('/evaluations',getEvaluationsAction)

router.get('/evaluation/:id',getEvaluationAction)

/* 

router.post('/evaluation',createEvaluationAction)
router.put('/evaluation/:id',updateEvaluationAction) */


export default router;