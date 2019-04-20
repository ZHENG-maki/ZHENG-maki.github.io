//搜索框焦点的改变开始
function ssChange_0()
{
	var ssk=document.getElementById("ssk");
	ssk.value="";
}
function ssChange_1()
{
	var ssk=document.getElementById("ssk");
	ssk.value="搜索...";
}
//搜索框焦点的改变结束
//动态开始
function p3dbg(obj)
{
	obj.children[0].style.background="url('img/p3dd.gif')";
	obj.style.backgroundColor="rgba(0,0,0,0)";
}
function p3dbg_1(obj)
{
	obj.children[0].style.background="url(img/p3d.png)";
	obj.style.backgroundColor="rgba(0,0,0,0.7)";
}
function p5dbg(obj)
{
	obj.children[0].style.background="url('img/p5dd.gif')";
	obj.style.backgroundColor="rgba(0,0,0,0)";
}
function p5dbg_1(obj)
{
	obj.children[0].style.background="url(img/p5d.png)";
	obj.style.backgroundColor="rgba(0,0,0,0.7)";
}
//动态结束