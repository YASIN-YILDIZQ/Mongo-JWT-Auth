// exampleRoute.js
var express = require('express');
var router = express.Router();
const isAuthhenticated=false;
router.all("*",(req,res,next)=>{
  if(isAuthhenticated){next()}else{res.json({msg:"Not authhenticated"})}
})
router.get('/', function(req, res) {
  res.json({success:true})
});

module.exports = router;
