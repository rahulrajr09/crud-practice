import express from 'express';
import routes from './Routes/routes.js';
import mongoose from "mongoose";
import bodyParser from 'body-parser';


//db configuration
mongoose.connect('mongodb://localhost:27017/books')
.then(()=> {
    console.log("DB connected!")
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
