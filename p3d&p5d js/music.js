//右侧歌曲信息滑动栏
$(function(){
	var flag=0;
	var p=document.getElementById("wz");
	$("#music_stay").click(function(){
		if(flag==0)
		{
			$("#music_xinxi").animate({width:"230px"},"slow");
			$("#music_stay").animate({height:"220px"},"slow")
			$("#music_fm1,#music_fm,.music_mz").css("display","block");
			p.innerHTML="关闭歌曲信息";
			flag=1;
		}
		else
		{
			$("#music_xinxi").animate({width:"0"},"slow");
			$("#music_stay").animate({height:"275px"},"slow")
			$("#music_fm1,#music_fm,.music_mz").css("display","none");
			p.innerHTML="管理当前播放歌曲";
			flag=0;
		}
	});
});

//歌曲点击播放
$(function(){
	var audio=document.getElementById("Music_bofang");
	$("dt").click(function(){
		audio.src=this.className;
		audio.title=this.title;
		audio.play();
	});
});

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

