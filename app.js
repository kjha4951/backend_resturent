const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const dbconnection=require('./database/dbconnection');
const {errorMiddleware }= require('./error/error');
const revervation=require('./routes/reservation');

const app=express();
dotenv.config({path:'./config/config.env'});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}));
app.options('*', cors()); // To handle preflight requests


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',revervation);

dbconnection();

app.use(errorMiddleware);

module.exports=app;