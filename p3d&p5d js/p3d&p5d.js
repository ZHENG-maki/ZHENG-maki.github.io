/*登陆相关部分开始*/
function change(myid,mode)
{
	var log=document.getElementById(myid);
	log.style.display=mode;
}
/*登陆相关部分结束*/

function p3dbg(obj){
	obj.children[0].style.background="url('img/p3dd2.gif')";
	obj.style.backgroundColor="rgba(0,0,0,0)";
}
function p3dbg_1(obj){
	obj.children[0].style.background="url(img/p3d.png)";
	obj.style.backgroundColor="rgba(0,0,0,0.7)";
}
function p5dbg(obj){
	obj.children[0].style.background="url('img/p5dd.gif')";
	obj.style.backgroundColor="rgba(0,0,0,0)";
}
function p5dbg_1(obj){
	obj.children[0].style.background="url(img/p5d.png)";
	obj.style.backgroundColor="rgba(0,0,0,0.7)";
}
