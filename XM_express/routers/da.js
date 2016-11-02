var express=require("express")
var router=express.Router()
var fs=require("fs")

router.get("/da",function(req,res){
	fs.readFile("./data/hot.json",function(err,data){
		console.log(JSON.parse(data))
		res.jsonp(JSON.parse(data))
	})
})

module.exports=router;