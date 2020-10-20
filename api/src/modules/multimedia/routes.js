import express from 'express'

import {getMultimediasAction, getMultimediaAction, createMultimediaAction, updateMultimediaAction} from './controllers/MultimediaController'

const router = express.Router()

router.get('/multimedias',getMultimediasAction)

router.get('/multimedia/:id',getMultimediaAction)

router.post('/multimedia',createMultimediaAction)

router.put('/multimedia/:id',updateMultimediaAction)

export default router;