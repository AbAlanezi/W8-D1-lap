import { prisma } from '../config/db'
import { Request, Response } from 'express'

export const createUser = async (req:Request, res:Response)=>{
    try{
        const user = req.body
    await prisma.user.create({
            data:user
        })
        res.json({
            message: "user created!"
        })
    }catch(e){
        console.log(e)
    }
} 
    
export const getUser = async (req:Request, res:Response)=>{
    try{
        const user = await prisma.user.findMany({
          select:{
            name: true,
            password: false,
            profile : true
          }  
        })
        res.json(user)
    }catch(e){
        console.log(e)
    }
}


export const createProfile = async (req:Request, res:Response)=>{
    try{
        const profile = req.body
    await prisma.profile.create({
            data:profile
        })
        res.json({
            message: "profile created!"
        })
    }catch(e){
        console.log(e)
    }
} 
    
export const getprofiles = async (req:Request, res:Response)=>{
    try{
        const profile = await prisma.profile.findMany({
          select:{
            user: true,
          }  
        })
        res.json(profile)
    }catch(e){
        console.log(e)
    }
}


