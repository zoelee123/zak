//入口文件
var express = require("express")
//实例化
var app = express();
var bodyParser=require("body-parser")
//console.log(bodyParser.json({'name':'123'}))  function

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(bodyParser.urlencoded({extended:false}))
var config = require("./config/config_route.js")(app)
var server = app.listen(3030,function(){
	console.log("启动 3030")
})