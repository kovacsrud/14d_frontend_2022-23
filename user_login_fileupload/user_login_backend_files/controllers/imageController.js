const asyncHandler=require('express-async-handler');
const mongoose=require('mongoose');
const Image=require('../models/Image');
const fs=require('fs');
const {dirname}=require('path');
const appDir=dirname(require.main.filename);

const getImages=asyncHandler(async (req,res)=>{

    const images=await Image.find({userid:req.user._id});
    //console.log(images);

    if(!images){
        throw new Error("Nincsenek feltöltött képek!")
    }

    res.json({path:"/files/"+req.user.username+"/",images:images});

});

const deleteImage=asyncHandler(async (req,res)=>{
    console.log("Törlésre:"+req.body.imageId);
    const {imageId}=req.body;
    const image=await Image.findById(imageId);
    //console.log(image);
    
    if(!image){
        throw new Error("A kép nem törölhető!");
    } else {
        const path=appDir+"/files/"+req.user.username+"/";
        
        if(fs.existsSync(path+image.imageName)){
            console.log(path+image.imageName)
            try {
                await Image.findOneAndRemove({userid:req.user._id,_id:imageId});
                await fs.rm(path+image.imageName,()=>{console.log("Törlés:"+imageId)});
                res.json({message:"Fájl törlése"});
                
            } catch (error) {
                res.json({"error":error});
            }
            
        }
        

    }

    //res.json({message:"Kép törölve!"});

});

module.exports={getImages,deleteImage};