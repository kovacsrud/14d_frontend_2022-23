const express=require('express');
const router=express.Router();
const {protect}=require('../mwares/authMiddleware');
const {getImages,deleteImage}=require('../controllers/imageController');

router.get('/',protect,getImages);
router.delete('/',protect,deleteImage);


module.exports=router;