<!--
var gSetColorType = "";
var gIsIE = document.all;
var gIEVer = fGetIEVer();
var gLoaded = false;
var ev = null;
var gSigns = "";
var gSignHtml = "";
var gCut=0 // 记录剪切状态：0为不可剪切，1为可以剪切
var gCpy=0 // 记录拷贝状态：0为不可拷贝，1为可以拷贝
var gName = window.name;
// 获取IE版本
function fGetIEVer(){
var iVerNo = 0;
var sVer = navigator.userAgent;
if(sVer.indexOf("MSIE")>-1){
               var sVerNo = sVer.split(";")[1];
               sVerNo = sVerNo.replace("MSIE","");
               iVerNo = parseFloat(sVerNo);
}
return iVerNo;
}
// 获取event对象
function fGetEv(e){
ev = e;
}

// 执行格式化显示
function fontname(obj)
{
                 format('fontname',obj.innerHTML);
                 document.getElementByIdx_x('imgFontface').innerHTML=obj.innerHTML;
                 obj.parentNode.style.display='none';
}
function fontsize(size,obj){
                 format('fontsize',size);
                 document.getElementByIdx_x('imgFontsize').innerHTML=obj.innerHTML;
                 obj.parentNode.style.display='none';
}
function rightMenuOperate(type,obj)
{
                 if((gCut==1&&type=="Cut")||(gCpy==1&&type=="Copy")||type=="Paste")
                 {
                     format(type);
                     obj.parentNode.style.display='none';
                 }
}
function format(type, para){
var f = document.getElementByIdx_x('editDiv');
var sAlert = "";
if(!gIsIE){
               switch(type){
                case "Cut":
                 sAlert = "您的浏览器安全设置不允许编辑器自动执行剪切操作,请使用键盘快捷键(Ctrl+X)来完成";
                 break;
                case "Copy":
                 sAlert = "您的浏览器安全设置不允许编辑器自动执行拷贝操作,请使用键盘快捷键(Ctrl+C)来完成";
                 break;
                case "Paste":
                 sAlert = "您的浏览器安全设置不允许编辑器自动执行粘贴操作,请使用键盘快捷键(Ctrl+V)来完成";
                 break;
               }
}
if(sAlert != ""){
               alert(sAlert);
               return;
}
f.focus();
if(!para){
               if(gIsIE){
                f.document.execCommand(type);
               }else{
                f.document.execCommand(type,false,false);
               }
}else{
               f.document.execCommand(type,false,para);
}
f.focus();
}
// 显示右键菜单
function showRightMenu(e)
{
                 fHideMenu();
    
                 var obj=document.getElementByIdx_x('dvRightMenu');
                 if(gIsIE)
                     var target= e.srcElement;
                 else
                     var target=e.target;
    
                 if(document.getElementByIdx_x('editDiv').document.selection.type != 'None') // 判断是否存在选中对象
                 {
                     gCut=1;
                     gCpy=1;
                     document.getElementByIdx_x('icoCut').style.backgroundPosition="1px 1px";
                     document.getElementByIdx_x('icoCpy').style.backgroundPosition="1px -19px";
                     obj.style.left=f_GetX(target)+e.offsetX;
                     obj.style.top=f_GetY(target)+e.offsetY;
                     obj.style.display="";
                 }
                 else
                 {
                     gCut=0;
                     gCpy=0;
                     document.getElementByIdx_x('icoCut').style.backgroundPosition="-59px 1px";
                     document.getElementByIdx_x('icoCpy').style.backgroundPosition="-59px -19px";
                     obj.style.left=f_GetX(target)+e.offsetX;
                     obj.style.top=f_GetY(target)+e.offsetY;
                     obj.style.display="";
                 }
    
                 document.getElementByIdx_x('icoPse').style.backgroundPosition="1px -42px";
                 obj.style.left=f_GetX(target)+e.offsetX;
                 obj.style.top=f_GetY(target)+e.offsetY;
                 obj.style.display="";
}
// 显示下拉菜单
function fDisplayElement(element,displayValue) {
if(gIEVer<=5.01 && gIsIE){
               if(element == "fontface"){
                var sReturnValue = showModalDialog("/a/f/js3/FontFaceSelect.htm","", "font-family:Verdana; font-size:12; status:no; unadorned:yes; scroll:no; resizable:yes;dialogWidth:112px; dialogHeight:271px");;
                format("fontname",sReturnValue);
               }else if(element == "fontsize"){
                var sReturnValue = showModalDialog("/a/f/js3/FontSizeSelect.htm","", "font-family:Verdana; font-size:12; status:no; unadorned:yes; scroll:no; resizable:yes;dialogWidth:130px; dialogHeight:250px");;
                format("fontsize",sReturnValue);
               }else if(element == "divAlign"){
                var sReturnValue = showModalDialog("/a/f/js3/AlignSelect.htm","", "font-family:Verdana; font-size:12; status:no; unadorned:yes; scroll:no; resizable:yes;dialogWidth:40px; dialogHeight:45px");;
                format(sReturnValue);
               }else if(element == "divList"){
                var sReturnValue = showModalDialog("/a/f/js3/ListSelect.htm","", "font-family:Verdana; font-size:12; status:no; unadorned:yes; scroll:no; resizable:yes;dialogWidth:60px; dialogHeight:45px");;
                format(sReturnValue);
               }else if(element == "divInOut"){
                var sReturnValue = showModalDialog("/a/f/js3/InOutdent.htm","", "font-family:Verdana; font-size:12; status:no; unadorned:yes; scroll:no; resizable:yes;dialogWidth:60px; dialogHeight:45px");;
                format(sReturnValue);
               }
               return;
}

fHideMenu();
if ( typeof element == "string" )
               element = document.getElementByIdx_x(element);
if (element == null) return;
element.style.display = displayValue;
if(gIsIE){
               var e = ev;
               var target = e.srcElement;
}else{
               var e = ev;
               var target = e.target;
}
var iX = f_GetX(target);
var iY = f_GetY(target);
element.style.display = "";
element.style.left = (iX+2) + "px";
element.style.top = (iY+21) + "px";
return true;
}

// 隐藏下拉菜单
function fHideMenu(){
try{
               var arr = ["fontface", "fontsize", "dvForeColor", "dvPortrait", "divAlign", "divList", "divInOut", "dvRightMenu", "dvLink" ];
               for(var i=0;i<arr.length;i++){
                var obj = document.getElementByIdx_x(arr[i]);
                if(obj){
                 obj.style.display = "none";
                }
               }
}catch(exp){}
}
// 隐藏对象
function fHide(obj){
obj.style.display="none";
}
// 获取对象的x坐标
function f_GetX(e)
{
var l=e.offsetLeft;
while(e=e.offsetParent){    
               l+=e.offsetLeft;
}
return l;
}
// 获取对象的y坐标
function f_GetY(e)
{
var t=e.offsetTop;
while(e=e.offsetParent){    
               t+=e.offsetTop;
}
return t;
}
// 设置字体颜色
function foreColor(e) {
fDisplayColorBoard(e);
gSetColorType = "foreColor";
}
// 设置背景色
function backColor(e){
var sColor = fDisplayColorBoard(e);
gSetColorType = "backcolor";
}
// 显示颜色拾取器
function fDisplayColorBoard(e){

if(gIEVer<=5.01 && gIsIE){
               var arr = showModalDialog("/a/f/js3/ColorSelect.htm", "", "font-family:Verdana; font-size:12; status:no; dialogWidth:21em; dialogHeight:21em");
               if (arr != null) return arr;
               return;
}

fHideMenu();

if(gIsIE)
               var target=e.srcElement;
else
                  var target=e.target;

var dvForeColor =document.getElementByIdx_x("dvForeColor");
var iX = f_GetX(target);
var iY = f_GetY(target);
dvForeColor.style.display = "";
dvForeColor.style.left = (iX+2) + "px";
dvForeColor.style.top = (iY+21) + "px";
return true;
}
// 显示表情
var faceTips = new Array();
faceTips[faceTips.length]="微笑";
faceTips[faceTips.length]="撇嘴";
faceTips[faceTips.length]="色";
faceTips[faceTips.length]="发呆";
faceTips[faceTips.length]="得意";
faceTips[faceTips.length]="流泪";
faceTips[faceTips.length]="害羞";
faceTips[faceTips.length]="闭嘴";
faceTips[faceTips.length]="睡";
faceTips[faceTips.length]="大哭";
faceTips[faceTips.length]="尴尬";
faceTips[faceTips.length]="发怒";
faceTips[faceTips.length]="调皮";
faceTips[faceTips.length]="呲牙";
faceTips[faceTips.length]="惊讶";
faceTips[faceTips.length]="难过";
faceTips[faceTips.length]="酷";
faceTips[faceTips.length]="非典";
faceTips[faceTips.length]="抓狂";
faceTips[faceTips.length]="吐";
faceTips[faceTips.length]="偷笑";
faceTips[faceTips.length]="可爱";
faceTips[faceTips.length]="白眼";
faceTips[faceTips.length]="傲慢";
faceTips[faceTips.length]="饥饿";
faceTips[faceTips.length]="困";
faceTips[faceTips.length]="惊恐";
faceTips[faceTips.length]="流汗";
faceTips[faceTips.length]="憨笑";
faceTips[faceTips.length]="大兵";
faceTips[faceTips.length]="奋斗";
faceTips[faceTips.length]="咒骂";
faceTips[faceTips.length]="疑问";
faceTips[faceTips.length]="嘘...";
faceTips[faceTips.length]="晕晕";
faceTips[faceTips.length]="折磨";
faceTips[faceTips.length]="衰";
faceTips[faceTips.length]="骷髅";
faceTips[faceTips.length]="敲打";
faceTips[faceTips.length]="再见";
faceTips[faceTips.length]="委屈";
faceTips[faceTips.length]="仰慕你";
faceTips[faceTips.length]="送花给你";
faceTips[faceTips.length]="搞怪";
faceTips[faceTips.length]="挖鼻孔";
faceTips[faceTips.length]="老大";
faceTips[faceTips.length]="猪头";
faceTips[faceTips.length]="猫咪";
faceTips[faceTips.length]="狗狗";
faceTips[faceTips.length]="拥抱";
faceTips[faceTips.length]="钱";
faceTips[faceTips.length]="灯泡";
faceTips[faceTips.length]="酒杯";
faceTips[faceTips.length]="蛋糕";
faceTips[faceTips.length]="闪电";
faceTips[faceTips.length]="炸弹";
faceTips[faceTips.length]="刀";
faceTips[faceTips.length]="足球";
faceTips[faceTips.length]="音乐";
faceTips[faceTips.length]="骨头";
faceTips[faceTips.length]="咖啡";
faceTips[faceTips.length]="饭";
faceTips[faceTips.length]="药丸";
faceTips[faceTips.length]="玫瑰";
faceTips[faceTips.length]="凋谢";
faceTips[faceTips.length]="亲亲";
faceTips[faceTips.length]="爱心";
faceTips[faceTips.length]="心碎";
faceTips[faceTips.length]="会议";
faceTips[faceTips.length]="礼物";
faceTips[faceTips.length]="电话";
faceTips[faceTips.length]="到点了";
faceTips[faceTips.length]="邮件";
faceTips[faceTips.length]="电视";
faceTips[faceTips.length]="太阳";
faceTips[faceTips.length]="好晚了";
faceTips[faceTips.length]="强";
faceTips[faceTips.length]="弱";
faceTips[faceTips.length]="握手";
faceTips[faceTips.length]="Yeah";
faceTips[faceTips.length]="多多";
faceTips[faceTips.length]="美女";
faceTips[faceTips.length]="汉良";
faceTips[faceTips.length]="毛毛";
faceTips[faceTips.length]="Q仔";
faceTips[faceTips.length]="工作忙";
faceTips[faceTips.length]="车子";
faceTips[faceTips.length]="白酒";
faceTips[faceTips.length]="汽水";
faceTips[faceTips.length]="西瓜";
faceTips[faceTips.length]="下雨";
faceTips[faceTips.length]="多云";
faceTips[faceTips.length]="雪人";
faceTips[faceTips.length]="星星";
faceTips[faceTips.length]="女";
faceTips[faceTips.length]="男";
function showEmotionFace()
{
                 var content=document.getElementByIdx_x('tbEmotionFace');
                 var str="'InsertImage'";
                 if (content.rows.length==0)
                 {
                     var n=0;
                     for(var i=0; i < 6; i++){
                         var tr=content.insertRow(-1);
                         for(var j=0; j<16; j++)
                         {
                             var td=tr.insertCell(-1);
                             td.innerHTML='<div id="dvFace" style="position:relative; float:left;               border-top:1px solid #EEE;border-right:1px solid #EEE;border-bottom:1px solid #EEE;border-left:1px solid #EEE; width:20px; height:20px; cursor:pointer!important; cursor:hand" onmouseover="fMouseOver(this)" onmouseout="fMouseOut(this)"><img src="Face/'+n+'.gif" id="imgFace" width="20px" height="20px"               title="'+faceTips[n]+'" onclick="format('+str+',this.src); return false;"/><a href="####"></a></div>';
                             n++;
                         }
                     }
                 }
}
function fMouseOver(obj)
{
obj.style.borderTop = '1px solid #CCC';
obj.style.borderRight = '1px solid #999';
obj.style.borderBottom = '1px solid #999';
obj.style.borderLeft = '1px solid #CCC';
}
function fMouseOut(obj)
{
obj.style.borderTop = '1px solid #EEE';
obj.style.borderRight = '1px solid #EEE';
obj.style.borderBottom = '1px solid #EEE';
obj.style.borderLeft = '1px solid #EEE';
}
// 创建链接
function createLink() {
var sURL=window.prompt("请输入链接 (如:http://www.163.com/):", "http://");
if ((sURL!=null) && (sURL!="http://")){
               format("CreateLink", sURL);
}
}
// 创建图片
function createImg() {
var sPhoto=prompt("请输入图片位置:", "http://");
if ((sPhoto!=null) && (sPhoto!="http://")){
               format("InsertImage", sPhoto);
}
}
//-->
