$(function(){
	var flag=0;
	var p=document.getElementById("wz");
	$("#music_stay").click(function(){
		if(flag==0)
		{
			$("#music_xinxi").animate({width:"230px"},"slow");
			$("#music_stay").animate({height:"220px"},"slow")
			p.innerHTML="关闭歌曲信息";
			flag=1;
		}
		else
		{
			$("#music_xinxi").animate({width:"0"},"slow");
			$("#music_stay").animate({height:"275px"},"slow")
			p.innerHTML="管理当前播放歌曲";
			flag=0;
		}
	});
});
