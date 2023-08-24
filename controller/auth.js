const config = require("../config/auth");
const user = require("../model/user");
var jwt = require("jsonwebtoken");

module.exports.signin = async (req, res) => {

    let si = await user.findOne({email: req.body.email});

        if (!si) {
           si = await user.create({"email":req.body.email,"username":req.body.username});   
        }
        const token = jwt.sign({ id: si.id },
                                config.secret,
                                {
                                  algorithm: 'HS256',
                                  allowInsecureKeySizes: true,
                                  expiresIn: 43200, 
                                });
  
                                res.cookie("VideoRecorder", token, {
                                  httpOnly: true,
                                  secure:false,
                              
                              });
  
  
        res.status(200).send({
          id: si._id,
          token:token,
          username: si.username,
          email: si.email,
        });
        // return res.redirect('/');
  }

// module.exports.signout=function(req,res){
//   res.clearCookie("VideoRecorder");
//   return res.redirect('/');
// }