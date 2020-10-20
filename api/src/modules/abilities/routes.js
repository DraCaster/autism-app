import express from 'express'

import {getAbilitiesAction, getSkillAction, createSkillAction, updateSkillAction} from './controllers/SkillController'

const router = express.Router()

router.get('/abilities',getAbilitiesAction)

router.get('/skill/:id',getSkillAction)

router.post('/skill',createSkillAction)

router.put('/skill/:id',updateSkillAction)

export default router;