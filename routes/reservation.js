const express=require('express');
const router=express.Router();
const sendreservation=require('../controller/resevation');

router.post('/send',sendreservation)



module.exports=router;