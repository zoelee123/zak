//放所有控制器 动画效果
angular.module("myapp")
	   .controller("main",main)
	   .controller("indexS",indexS)




function main($scope,$location){

}


function indexS($scope,$location){
	/*$scope.indexScroll=new IScroll("#main")
	var img=document.getElementsByTagName('img')
	for (var i = 0; i < img.length; i++) {
		img[i].onload=function(){
			window.onresize=function(){}
			console.log($scope.indexScroll)
			$scope.indexScroll.refresh()
		}
	};*/

	setTimeout(function(){new IScroll("#main")
	},100)

	$scope.swiper=new Swiper(".swiper-container",{
		autoplay:2000
	})

	//ajax数据渲染
	/*if(window.localStorage.data){
		$scope.data=window.JSON.parse(window.localStorage.data)
	}
	$.ajax({
		url:"./data/hot.json",
		dataType:"json",
		success:function(data){
			//$scope.data=JSON.parse(data);
			//console.log($scope.data)
			//if($scope.data.code!=data.code){
				window.localStorage.data=window.JSON.stringify(data)
			//}else if(!window.localStorage.data){
				//window.localStorage.data=window.JSON.stringify(data)
			//}
		}
	})*/
}

