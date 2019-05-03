//右侧歌曲信息滑动栏
$(function(){
	var flag=0;
	var p=document.getElementById("wz");
	$("#music_stay").click(function(){
		if(flag==0)
		{
			$("#music_xinxi").animate({width:"230px"},"slow");
			$("#music_stay").animate({height:"220px"},"slow")
			$("#music_fm1,#music_fm,.music_mz,#music_jd,#music_Time,#anniu").css("display","block");
			p.innerHTML="关闭歌曲信息";
			flag=1;
		}
		else
		{
			$("#music_xinxi").animate({width:"0"},"slow");
			$("#music_stay").animate({height:"275px"},"slow")
			$("#music_fm1,#music_fm,.music_mz,#music_jd,#music_Time,#anniu").css("display","none");
			p.innerHTML="管理当前播放歌曲";
			flag=0;
		}
	});
});
//给所有的dt进行标记，用于其他网页时需要更改
var dt=document.getElementsByTagName("dt");
//歌曲点击播放
$(function(){
	var audio=document.getElementById("Music_bofang");
	$("dt").click(function(){
		audio.src=this.className;
		audio.title=this.title;
		var img=$(this).children();
		audio.className=img[0].alt;//监视audio当前所播放的歌曲
		audio.play();
		var stop=document.getElementsByTagName("i");	
		stop[1].className="icon-pause";
		//替换动态小图标
		$("#dtxtb").attr("src","img/dtxtb.gif")
	});
});
//监测是否点击了dt使歌曲播放
//歌曲封面
$(function(){
	$("dt").click(function(){
		var img=document.getElementById("music_fm");
		var img_src=document.getElementsByClassName("p5d图片");
		img.src=img_src[0].src;
		$("#music_fm1").css("background","url(img/碟片.png) no-repeat right");
	});
});

//歌曲名字
$(function(){
	$("dt").click(function(){
		var mz=document.getElementsByClassName("music_mz");
		var audio=document.getElementById("Music_bofang");
		mz[0].innerHTML=audio.title;
	});
});
//播放进度条，小球的拖动
function music_yd(e){	
	var zjdf=$(".music_zjd").offset().left;//这里是进度条前端的相对浏览器距离
	var jdyd=e.clientX-zjdf;//鼠标点击进度条的的偏移距离
	$(".music_jdd").css("left",jdyd);
	var left=document.getElementById("music_jdd").style.left;
	$(".music_dqjd").css("width",left);
}
function music_ydd(){
	var zjdf_1=$(".music_zjd").offset().left;	
	var mdown_1=true;
	$("#music_jd").mousemove(function(event){		
		if(mdown_1)
			{
				var jdyd_1=event.pageX-zjdf_1;
				$(".music_jdd").css("left",jdyd_1);
					var left=document.getElementById("music_jdd").style.left;
				$(".music_dqjd").css("width",left);
			}	
	});
	$("#music_stay").mouseout(function(){
		mdown_1=false;
	});
	$(".music_jdd,#music_jd,html").mouseup(function(){
		mdown_1=false;
	});
}
//播放时间的返回
$(function(){
	var audio_1=document.getElementById("Music_bofang");
	audio_1.load();
	audio_1.ondurationchange=function(){		
		var time_dq=audio_1.currentTime;
		var time_gq=audio_1.duration;
		var dq=document.getElementsByClassName("music_time_dq");
		var gq=document.getElementsByClassName("music_time_gq");
		if(parseInt(time_gq%60)<10)
			var time_gq_s="0"+parseInt(time_gq%60);		
		else
			time_gq_s=parseInt(time_gq%60);
		gq[0].innerHTML="0"+parseInt(time_gq/60)+":"+time_gq_s;
		setInterval(function(){
			time_dq=audio_1.currentTime;
			if(parseInt(time_dq%60)<10)
				var time_dq_s="0"+parseInt(time_dq%60);
			else
				{time_dq_s=parseInt(time_dq%60);}
			dq[0].innerHTML="0"+parseInt(time_dq/60)+":"+time_dq_s;
			//进度条随时间更新
			var jss=time_dq/time_gq;
			$(".music_dqjd").css("width", (jss*200)+"px");
			$(".music_jdd").css("left", (jss*200) +"px");
		},1000);
		//使用火狐浏览器的时候可以试试这条代码或者将音频放到线上|||尽力了qaq；
//		$(".music_zjd,.music_dqjd").click(function(){	
//			 	//时间随进度条更新
//			var left=document.getElementById("music_jdd").style.left;
//			var ssj=parseFloat(left)/200;
//			audio_1.currentTime=parseInt(time_gq*ssj);
//			audio_1.currentTime=time_gq*ssj;
//		});
	}
});
//重置进度条
$(function(){
	$("dt").click(function(){	
		$(".music_dqjd").css("width",0);
		$("#music_jdd").css("left",0);
	});
});
//上一首
function befor(){
	var audio_bf=document.getElementById("Music_bofang");
	var new_bf=parseInt(audio_bf.className)-1;
	if(new_bf<1)
		new_bf=13;
	audio_bf.src=dt[new_bf-1].className;
	audio_bf.title=dt[new_bf-1].title;
	var mz=document.getElementsByClassName("music_mz");
	mz[0].innerHTML=audio_bf.title;
	audio_bf.className=new_bf;
	audio_bf.load();
	audio_bf.play();
}
//下一首
function next(){
	var audio_bf=document.getElementById("Music_bofang");
	var new_bf=parseInt(audio_bf.className)+1;
	if(new_bf>13)
		{new_bf=1;}
	audio_bf.src=dt[new_bf-1].className;
	audio_bf.title=dt[new_bf-1].title;
	var mz=document.getElementsByClassName("music_mz");
	mz[0].innerHTML=audio_bf.title;
	audio_bf.className=new_bf;
	audio_bf.load();
	audio_bf.play();
}
//暂停||开始
function stop(){
	var audio_bf=document.getElementById("Music_bofang");
	var stop=document.getElementsByTagName("i");	
	if(stop[1].className=="icon-play")
		{
			stop[1].className="icon-pause";
			audio_bf.play();
			$("#dtxtb").attr("src","img/dtxtb.gif")
		}
	else
		{
			stop[1].className="icon-play";
			audio_bf.pause();
			$("#dtxtb").attr("src","img/ym.png")
		}
}
/**
 *
 * ━━━━━━神兽出没━━━━━━
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛Code is far away from bug with the animal protecting
 * 　　　　┃　　　┃    神兽保佑,代码无bug
 * 　　　　┃　　　┃
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　　　┣┓
 * 　　　　┃　　　　　　　┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */
  
/**
 * 　　　　　　　　┏┓　　　┏┓
 * 　　　　　　　┏┛┻━━━┛┻┓
 * 　　　　　　　┃　　　　　　　┃ 　
 * 　　　　　　　┃　　　━　　　┃
 * 　　　　　　　┃　＞　　　＜　┃
 * 　　　　　　　┃　　　　　　　┃
 * 　　　　　　　┃...　⌒　...　┃
 * 　　　　　　　┃　　　　　　　┃
 * 　　　　　　　┗━┓　　　┏━┛
 * 　　　　　　　　　┃　　　┃　Code is far away from bug with the animal protecting　　　　　　　　　　
 * 　　　　　　　　　┃　　　┃   神兽保佑,代码无bug
 * 　　　　　　　　　┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　　┃　　　┃  　　　　　　
 * 　　　　　　　　　┃　　　┃
 * 　　　　　　　　　┃　　　┃　　　　　　　　　　　
 * 　　　　　　　　　┃　　　┗━━━┓
 * 　　　　　　　　　┃　　　　　　　┣┓
 * 　　　　　　　　　┃　　　　　　　┏┛
 * 　　　　　　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　　　　　　┃┫┫　┃┫┫
 * 　　　　　　　　　　┗┻┛　┗┻┛
 */
  
/**
 *　　　　　　　　┏┓　　　┏┓+ +
 *　　　　　　　┏┛┻━━━┛┻┓ + +
 *　　　　　　　┃　　　　　　　┃ 　
 *　　　　　　　┃　　　━　　　┃ ++ + + +
 *　　　　　　 ████━████ ┃+
 *　　　　　　　┃　　　　　　　┃ +
 *　　　　　　　┃　　　┻　　　┃
 *　　　　　　　┃　　　　　　　┃ + +
 *　　　　　　　┗━┓　　　┏━┛
 *　　　　　　　　　┃　　　┃　　　　　　　　　　　
 *　　　　　　　　　┃　　　┃ + + + +
 *　　　　　　　　　┃　　　┃　　　　Code is far away from bug with the animal protecting　　　　　　　
 *　　　　　　　　　┃　　　┃ + 　　　　神兽保佑,代码无bug　　
 *　　　　　　　　　┃　　　┃
 *　　　　　　　　　┃　　　┃　　+　　　　　　　　　
 *　　　　　　　　　┃　 　　┗━━━┓ + +
 *　　　　　　　　　┃ 　　　　　　　┣┓
 *　　　　　　　　　┃ 　　　　　　　┏┛
 *　　　　　　　　　┗┓┓┏━┳┓┏┛ + + + +
 *　　　　　　　　　　┃┫┫　┃┫┫
 *　　　　　　　　　　┗┻┛　┗┻┛+ + + +
 */
//虽然已经知道代码有bug了QAQ；