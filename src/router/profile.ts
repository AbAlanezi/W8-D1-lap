import { createUser, getUser, createProfile, getprofiles } from '../controler/profile'
import { SMStyeps } from '../zodSchema/zod.SMS'
import validate from '../middileware/validate'
// import {BMStyeps} from '../zodSchema/zod.BMS'
import Router from 'express'

const router = Router()

router.post('/user',validate(SMStyeps), createUser)
router.get('/user', getUser)


router.post('/',validate(SMStyeps), createProfile)
router.get('/', getprofiles)



export default router