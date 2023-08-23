const express=require("express");
const controller = require("../controller/auth");
const router=express.Router();


router.post("/signin",controller.signin);
//   router.post("/signout", controller.signout);
module.exports=router;