
import { createSstudent, getStudent, getStudentById, createClass, getSclass, getClassById, createTeacher, getTeacher, getTeacherById } from '../controler/SMS'
import { SMStyeps } from '../zodSchema/zod.SMS'
import validate from '../middileware/validate'
// import {BMStyeps} from '../zodSchema/zod.BMS'
import Router from 'express'

const router = Router()

router.post('/',validate(SMStyeps), createSstudent)
router.get('/', getStudent)
router.get('/:id', getStudentById)

router.post('/class',validate(SMStyeps), createClass)
router.get('/class', getSclass)
router.get('/class/:id', getClassById)

router.post('/teacher',validate(SMStyeps), createTeacher)
router.get('/teacher', getTeacher)
router.get('/teacher/:id', getTeacherById)

export default router