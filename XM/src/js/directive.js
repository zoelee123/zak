//放所有directive 标题
function createDom($rootScope){
	//A 对应的是自定义属性的形式调用
	//C 对应的是class调用
	//E 对应的是自定义元素调用
	return{
		restrict:"C",
		link:function(scope,element){
			var str="";
			scope.data.forEach(function(v){
				str+="<span>"+v.name+"</span>";
			})
			element.find("button").on("click",function(){
				$scope.data=111;
			})
			$scope.$watch("data",function(nv,ov){
				//console.log(JSON,stringify(nv)+JSON.stringify(ov))
			})
			element.append(str)
		}
	}
}


function pageTitle($rootScope){
	return{
		restrict:"A",
		link:function(scope,element){
			//console.log(element);
			
			$rootScope.$on("$stateChangeStart",function(event,toState){
				var tit="后台管理系统--"
				//console.log(toState.url);
				tit+=toState.url;
				/*if(toState.data && toState.data.title){
					tit+=toState.data.title;
				}*/
				//console.log(element);
				element.text(tit);
			})

			$rootScope.$on("$stateChangeError",function(event){
				//console.log(event);
			})
		}
	}
}

//请求后台数据渲染
function hotA($rootScope){
	return{
		link:function(scope,element){
		//console.log(2)
			$.ajax({
				url:"http://localhost:3030/da?callback=?",
				dataType:"jsonp",
				type:'post',
				success:function(e){
					console.log(e)
					var str="",
						hot_list=e.hot_list;
					for(var i in hot_list){
						//console.log(hot_list[i])
						str+='<dl class="cont" ui-sref="hot_n1">'
									+'<h1><b>'+hot_list[i].title+'</b><br><b>1小时前</b></h1>'
									+'<div class="pic"><img src="'+hot_list[i].pic+'"></div>'
								+'</dl>'
					}
					$("#main").find(".scroll").append(str);
				}
			})
		}
	}
}

function beiA($rootScope){
	return{
		link:function(scope,element){
		//console.log(2)
			$.ajax({
				url:"http://localhost:3030/da?callback=?",
				dataType:"jsonp",
				type:'post',
				success:function(e){
					console.log(e)
					var str="",
						bei_list=e.bei_list;
					for(var i in bei_list){
						//console.log(bei_list[i])
						str+='<dl class="cont" ui-sref="hot_n1">'
									+'<h1><b>'+bei_list[i].title+'</b><br><b>1小时前</b></h1>'
									+'<div class="pic"><img src="'+bei_list[i].pic+'"></div>'
								+'</dl>'
					}
					$("#main").find(".scroll").append(str);
				}
			})
		}
	}
}

function indexN2($rootScope){
	return{
		link:function(scope,element){
			$.ajax({
				url:"http://localhost:3030/da?callback=?",
				dataType:"jsonp",
				type:'post',
				success:function(e){
					console.log(e)
					var str="",
						hot_list=e.hot_list;
					for(var i in hot_list){
						//console.log(hot_list[i])
						str+='<div class="title">'
									+'<span>'+hot_list[i].title+'</span><br><span>看商界</span><span>1小时前</span>'
								+'</div>'
								+'<p>'+hot_list[i].cont+'</p>'
					}
					$("#main").find(".scroll").append(str);
				}
			})
		}
	}
}
/*function indexS($rootScope){
	return{
		link:function(scope,element){
			console.log(element[0])
			new IScroll(element[0],{
				click:true
			})
		}
	}
}                                              

function indexS1($rootScope){
	return{
		link:function(scope,element){
			new IScroll(element,{
				click:true
			})
		}
	}
}

function indexS2($rootScope){
	return{
		link:function(scope,element){
			new IScroll(element,{
				click:true
			})
		}
	}
}*/

angular.module("myapp")
	   .directive("createDom",createDom)
	   .directive("pageTitle",pageTitle)
	   .directive("hotA",hotA)
	   .directive("beiA",beiA)
	   .directive("indexN2",indexN2)
	   // .directive("indexS",indexS)
	   // .directive("indexS1",indexS1)
	   // .directive("indexS2",indexS2)