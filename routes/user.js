const express=require("express");
const  authJwt  = require("../middleware/auth");
const controller = require("../controller/user");
const router=express.Router();

router.post("/",authJwt.verifyToken,controller.user);

module.exports=router;