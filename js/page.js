//当整个页面都被加载以后 就这些ready中的函数
$(document).ready(function(){
	
	//首页动画效果
	firstpage();
	
	var index=0;
	//使用jQuery 获取box 并给box添加滑动监听
	$(".box").swipe({
		swipe:function(event,direct){
			console.log(direct);//left right up down
			if("up"==direct){//比较是否一致
				//手势向上滑动
				index++;
				if(index<=3){
					change();
				}else{
					index=3;
				}
			}else if("down"==direct){
				// 手势向下滑动
				index--;
				if(index>=0){
					change();
				}else{
					index=0;
				}
			}
		}
	});
	function initpage(){
		switch(index){
			case 0:
			$(".page1-build").hide();//隐藏
			//修改某一样式 直接用css()函数
			$(".page1-flight").css("width","0%");
			break;
			case 1:
			$(".page2-bg").hide();
			$(".page2-text1").css("right","-70%");
			$(".page2-text2").css("right","-70%");
			break;
			case 2:
			$(".page3-bus").css("left","0%");
			$(".page3-avatar").css("right","-30%");
			break;
			case 3:
			$(".page4-light").attr("src","img/lightOff.png");
			$(".page4-title").html("点一下 有惊喜！！");
			break;
		}
	}
	function change(){
		//当执行切换页面之前  我们应该初始化要切换到的页面
		initpage();
		
		//给标签添加动画特效函数 参1 修改样式 参2 样式改变时间 动画执行完以后 会调这个函数
		$(".pagelist").animate({top:-index*100+"%"},500,"linear",function(){
			//当切换到一个新页面以后就执行这个函数
			pageanim();
		});
	}
	
	function pageanim(){
		switch(index){
			case 0:
			//切换到第1页面
			firstpage();
			break;
			case 1:
			//切换到第2页面
			$(".page2-bg").fadeIn(1000,function(){
				$(".page2-text1").animate({right:"1%"},1000,function(){
					$(".page2-text2").animate({right:"1%"},1000);
				});
			});
			break;
			case 2:
			//切换到第3页面
			$(".page3-early").fadeIn(1000,function(){
				$(this).fadeOut(500);//隐藏
				$(".page3-last").fadeIn(1000,function(){
					$(this).fadeOut(500)//隐藏
					//车跑  人追
					$(".page3-bus").animate({left:"-60%"},2000);
					$(".page3-avatar").animate({right:"100%"},4000);
				});
			});
			break;
			case 3:
			//切换到第4页面
			break;
		}
	}
	
	function firstpage(){
		//淡入
		$(".page1-build").fadeIn(1000);
		$(".page1-flight").animate({width:"70%"},2000);
	}
	
	//给灯设置点击事件
	$(".page4-light").click(function(){
		//给img换图片  修改标签属性用 attr()函数
		$(this).attr("src","img/lightOn.png");
		//给标签修改标签内容 用html()函数
		$(".page4-title").html("你已经被选为三好学生");
	});
	
	// 操作音乐播放
	var audio=document.getElementById("audio");
	$(".music").click(function(){
		if(audio.paused){
			//播放
			audio.play();
			$(this).attr("src","img/musicBtn.png");
		}else{
			audio.pause();
			$(this).attr("src","img/musicBtnOff.png");
		}
	});
	
});
