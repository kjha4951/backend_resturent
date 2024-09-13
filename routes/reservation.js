const express=require('express');
const router=express.Router();
const sendreservation=require('../controller/resevation');

router.post('/send',sendreservation)
router.get('/',(req,res)=>{
   res.send('hello');
})


module.exports=router;