//gulp入口  压缩文件
var gulp=require("gulp");//引入gulp模块
var fs=require("fs");//文件操作模块

//1、gulp入口
var connect=require("gulp-connect");// 本地服务器模块
var respond=require("gulp-respond");//本地服务器编译响应


//2、普通压缩js
var uglify=require("gulp-uglify");//压缩js
var concat=require("gulp-concat");//合并js

// //3、angularjs项目的压缩
var ngAnnotate=require("gulp-ng-annotate");
var ngmin=require("gulp-ngmin");//angular单独的模块压缩angular项目

// //4、压缩html  引入模块
// var minifyHtml=require("gulp-minify-html");
// var rename=require("gulp-raname")//重命名问价

//5、清空
//var clean=require("gulp-clean");//清空

//6、加密
// var rev=require("gulp-rev");//加密  在输出之前加rev 直接加密
// var revCollector=require("gulp-rev-collector"); //替换



 
//清除
/*gulp.task("clean",function(){
	return gulp.src(['./src/js/build',"./src/css/build"])
			   .pipe(clean())
})*/

//压缩加密css
/*gulp.task("miniCss",["clean"],function(){
	gulp.src(["./src/css/*.css"])
		.pipe(minifyCss())
		.pipe(concat("all.min.css"))
		.pipe(gulp.dest(".src/css/build/"))
		.pipe(rev.manifest("miniCss.json"))//加密
		.pipe(gulp.dest("./src/"))
})*/


//2、普通压缩
/*gulp.task("build",function(){
	gulp.src(["src/js/app.js","src/js/config.js","src/js/controller.js","src/js/directive.js","src/js/fontSize.js"])
		.pipe(uglify())  //压缩
		.pipe(concat("ng.min.js"))  //合并
		.pipe(gulp.dest("src/js/build/"))  //输出
})*/

//3、angularjs项目的压缩
gulp.task("build",function(){
	gulp.src(["src/js/app.js","src/js/config.js","src/js/controller.js","src/js/directive.js","src/js/fontSize.js"])//操作 src方法里可操作数组传多个文件
		.pipe(ngAnnotate())//编译控制器
		.pipe(ngmin())//压缩下
		.pipe(uglify())//压缩
		.pipe(concat("ng.min.js"))//合并
		//.pipe(rev()) //加密
		//.pipe(gulp.dest("src/js/build/"))//将压缩的文件存到build文件夹
		//.pipe(rev.manifest("miniJs.json"))//替换为json问价
		.pipe(gulp.dest("./src/js/build"))
})

//4、压缩html
/*gulp.task("minifyHtml",["miniJs"],function(){
	return  gulp.src("./src/index.html")//操作内容
			.pipe(minifyHtml())//压缩
			.pipe(rename(fucntion(path){//通过rename更改名字
				console.log(path)
				path.basename="build";
			}))
			.pipe(gulp.dest("./src/build/"))//输出到build文件夹下
})*/


//替换 
/*gulp.task("rev",["minifyHtml"],function(){
	return	gulp.src(["./src/build.html","./src/miniJs.json","./src/miniCss.json"])
			.pipe(revCollector())
			.pipe(gulp.dest("./src"))
})*/

/*gulp.task("watch,function(){
	gulp.watch(["./src/js/*.js","./src/css/*.css"],["rev"])
})*/


//1、注册任务 启动服务器
gulp.task("connect",function(){//注册任务名
	var params={};
	connect.server({//启动本地server
		root:["src","./bower_components"],//多个root目录 静态资源 html css js
		port:8008,//端口号
		livereload:true,//本地server中间件，完成本地动态编译
		middleware:function(){
			return[function(req,res,next){//接受响应、请求体、next回调函数
				console.log("开始操作")
				next();
			},function(req,res){
				var path=req.url.split("?").shift();
				path=path=="/" ? "/app.html" : path;//入口文件名
				//获取运行时参数
				// if(path.indexOf("index.html")>-1){
				// 	params=getParams(req.url);
				// }

				url="src"+path;
				if(!fs.existsSync(url)){
					url="bower_components"+path;//在bower中加载静态资源
				}

				gulp.src(url)
					.pipe(respond(res));//响应
			}]
		}
	})
})


gulp.task("test",function(){
	console.log("zheshi test task")//执行build任务时打印这句话
})

//启动项目
gulp.task("serve",["build","connect"]); //执行一个server任务 包括build与connect服务器任务 watch监听








