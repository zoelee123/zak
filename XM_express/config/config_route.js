var login=require("../routers/login.js")
var da=require("../routers/da.js")
var signUp=require("../routers/signUp.js")


module.exports=function(app){
	app.get("/login",login)
	app.get("/da",da)

	//post请求
	app.post("/signUp",signUp)
}