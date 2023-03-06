
import  express, {Application}  from "express";
import { connectDB } from "./config/db"; 
import SMBRouter from './router/SMS.touter'
import profileRouter from './router/profile.router'


const app:Application = express()
app.use(express.json())
 const port:number = 3003
app.use('/SMS', SMBRouter)
app.use('/profile', profileRouter)



 app.listen(port, ()=> console.log(`server is runing on port ${port}`));
 connectDB()