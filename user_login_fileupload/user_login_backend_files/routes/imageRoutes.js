const express=require('express');
const router=express.Router();
const {protect}=require('../mwares/authMiddleware');
const {getImages}=require('../controllers/imageController');

router.get('/',protect,getImages);


module.exports=router;