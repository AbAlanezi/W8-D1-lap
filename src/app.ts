
import  express, {Application}  from "express";
import { connectDB } from "./config/db"; 
import SMBRouter from './router/SMS.touter'


const app:Application = express()
app.use(express.json())
 const port:number = 3003
app.use('/SMS', SMBRouter)



 app.listen(port, ()=> console.log(`server is runing on port ${port}`));
 connectDB()