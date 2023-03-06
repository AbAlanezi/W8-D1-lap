import { prisma } from '../config/db'
import { Request, Response } from 'express'



// ******** User ******** 
export const createSstudent = async (req:Request, res:Response)=>{
    try{
        const student = req.body
        await prisma.student.create({
            data:student
        })
        res.json({
            message: "student created!"
        })
    }catch(e){
        console.log(e)
    }
} 

export const getStudent = async (req:Request, res:Response)=>{
    try{
        const student = await prisma.student.findMany({
          select:{
            name: true,
            age: true,
            major : true
          }  
        })
        res.json(student)
    }catch(e){
        console.log(e)
    }
}




export const getStudentById = async (req:Request, res:Response)=>{
    try{
    const student_id = req.params.id
   const student = await prisma.student.findFirst({
         where:{
           id: student_id 
         }
    })
    res.json(student)
    }catch(e){
        console.log(e)
    }
}

// ******** End User ******** 

// ******** Class ******** 



export const createClass = async (req:Request, res:Response)=>{
    try{
        const classroom = req.body
        await prisma.clasRroom.create({
            data: classroom
        })
        res.json({
            message: "class created!"
        })
    }catch(e){
        console.log(e)
    }
} 

export const getSclass = async (req:Request, res:Response)=>{
    try{
        const getClass = await prisma.clasRroom.findMany({
          select:{
            name: true
          }  
        })
        res.json(getClass)
    }catch(e){
        console.log(e)
    }
}




export const getClassById = async (req:Request, res:Response)=>{
    try{
    const Class_id = req.params.id
   const Class = await prisma.clasRroom.findFirst({
         where:{
           id: Class_id 
         }
    })
    res.json(Class)
    }catch(e){
        console.log(e)
    }
}



// ******** End Class ********


// ******** Teatcher ******** 



export const createTeacher = async (req:Request, res:Response)=>{
    try{
        const teacher = req.body
        await prisma.teacher.create({
            data: teacher
        })
        res.json({
            message: "Teacher created!"
        })
    }catch(e){
        console.log(e)
    }
} 

export const getTeacher = async (req:Request, res:Response)=>{
    try{
        const teacher = await prisma.teacher.findMany({
          select:{
            nametch: true
          }  
        })
        res.json(teacher)
    }catch(e){
        console.log(e)
    }
}




export const getTeacherById = async (req:Request, res:Response)=>{
    try{
    const teacher_id = req.params.id
   const teacher = await prisma.teacher.findFirst({
         where:{
           id: teacher_id 
         }
    })
    res.json(teacher)
    }catch(e){
        console.log(e)
    }
}



// ******** End Teatcher ******** 


// Create endpoint that takes student id and return one student (return bad request if student id is invalid)

export const StudentById = async (req:Request, res:Response)=>{
    try{
    const student_id = req.params.id
   const student = await prisma.student.findFirst({
         where:{
           id: student_id 
         }
    })
    if(!student){
        res.json({
            message: "User id is invalid"
        })
    }else{
        res.json(student)
    }
    }catch(e){
        console.log(e)
    }
}

// Create endpoint that takes teacher id and return one teacher (return bad request if teacher id is invalid)
export const teacherById = async (req:Request, res:Response)=>{
    try{
    const teacher_id = req.params.id
   const teacher = await prisma.teacher.findFirst({
         where:{
           id: teacher_id 
         }
    })
    if(!teacher){
        res.json({
            message: "Teacher id is invalid"
        })
    }else{
        res.json(teacher)
    }
    }catch(e){
        console.log(e)
    }
}


// Create endpoint that takes classroom id and return one classroom (return bad request if classroom id is invalid)
export const ClassById = async (req:Request, res:Response)=>{
    try{
    const Class_id = req.params.id
   const Class = await prisma.clasRroom.findFirst({
         where:{
           id: Class_id 
         }
    })
    if(!Class){
        res.json({
            message: "Class id is invalid"
        })
    }else{
        res.json(Class)
    }
    }catch(e){
        console.log(e)
    }
}


