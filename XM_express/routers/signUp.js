var express=require("express")
var router=express.Router();

var sqluser="lijiajia",
	sqlpas="123456";
router.post("/signUp",function(req,res){
	//console.log("成功访问到signUP")
	//console.log(req.body)
	//res.end('iiooo');
	var user=req.body.username,
		pas=req.body.password;
		console.log(user+'----'+pas);
	if(user!=sqluser || pas!=sqlpas){
		//var json=JSON.stringify({code:1,msg:'密码错误'})
		res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
		res.end('用户错误')
		//res.end(json)
	}else{
		res.redirect('http://localhost:8008/#/index')//重新指向地址
	}

})

module.exports=router;