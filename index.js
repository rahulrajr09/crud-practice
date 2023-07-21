import express from 'express';
import routes from './Routes/routes.js';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();


const db = process.env.DB_HOST;
//db configuration
mongoose.connect(db )
.then(()=> {
    console.log("DB connected! ")
})
.catch((err)=>{
    console.log(err); 
})

const app = express();


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.json());
app.use(routes);


app.listen(3000,() => {
    console.log("Listening!");
})
