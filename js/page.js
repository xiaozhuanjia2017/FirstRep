//当整个页面都被加载以后 就这些ready中的函数
$(document).ready(function(){
	
	var index=0;
	
	//使用jQuery 获取box 并给box添加滑动监听
	$(".box").swipe({
		swipe:function(event,direct){
			console.log(direct);//left right up down
			if("up"==direct){//比较是否一致
				//手势向上滑动
				index++;
				if(index>3){
					index=3;
				}
				//给标签添加动画特效函数 参1 修改样式 参2 样式改变时间
				change();
				
			}else if("down"==direct){
				// 手势向下滑动
				index--;
				if(index<0){
					index=0;
				}
				change();
			}
		}
	});
	
	function change(){
		$(".pagelist").animate({top:-index*100+"%"},500,"linear");
	}
	
});
