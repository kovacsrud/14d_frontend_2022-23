const asyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const Image=require('../models/Image');

const getImages=asyncHandler(async (req,res)=>{

    const images=await Image.find({userid:req.user._id});

    if(!images){
        throw new Error("Nincsenek feltöltött képek!")
    }

    res.json({path:"/files/"+req.user.username+"/",images:images});

});

module.exports={getImages};