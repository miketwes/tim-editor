//var giMoBaseUrl = "http://m13.mail.qq.com/images/mo/";
var giMoBaseUrl = "./images/mo/";
var giMoCellWidth = 21;
var giMoCellHeight = 21;
var giMoRowNum = 4;
var giMoColNum = 9;
var giMoCurTab = 0;
var giMoCurPage = 0;
var giMoShowWidth = 75;
var giMoShowHeight = 75;
 
/*
gvMoData数据结构: 表情组列
|
|---组名
|
|---存放子目录(注: 保持目录不变请填"", 要加入目录最后一定要加上"/")
|
|---表情数据列
      |
          |---表情文件名
          |
          |---表情提示
*/
 
var gvMoData = [
 [
         ["默认"]
        ,[""]
        ,[
                 [ "m1.gif","惊讶"],[ "m2.gif","撇嘴"],[ "m3.gif",  "色"],[ "m4.gif","发呆"],[ "m5.gif","得意"],[ "m6.gif","流泪"],[ "m7.gif","害羞"],[ "m8.gif","闭嘴"],[ "m9.gif",  "睡"],["m10.gif","大哭"]
                ,["m11.gif","尴尬"],["m12.gif","发怒"],["m13.gif","调皮"],["m14.gif","呲牙"],["m15.gif","微笑"],["m16.gif","难过"],["m17.gif",  "酷"],["m18.gif","非典"],["m19.gif","抓狂"],["m20.gif",  "吐"]
                ,["m21.gif","偷笑"],["m22.gif","可爱"],["m23.gif","白眼"],["m24.gif","傲慢"],["m25.gif","饥饿"],["m26.gif",  "困"],["m27.gif","惊恐"],["m28.gif","流汗"],["m29.gif","憨笑"],["m30.gif","大兵"]
                ,["m31.gif","奋斗"],["m32.gif","咒骂"],["m33.gif","疑问"],["m34.gif",  "嘘"],["m35.gif",  "晕"],["m36.gif","折磨"],["m37.gif",  "衰"],["m38.gif","骷髅"],["m39.gif","敲打"],["m40.gif","再见"]
                ,["m41.gif","闪人"],["m42.gif","发抖"],["m43.gif","爱情"],["m44.gif",  "跳"],["m45.gif",  "找"],["m46.gif","美眉"],["m47.gif","猪头"],["m48.gif","猫咪"],["m49.gif","小狗"],["m50.gif","拥抱"]
                ,["m51.gif",  "钱"],["m52.gif","灯泡"],["m53.gif","酒杯"],["m54.gif","蛋糕"],["m55.gif","闪电"],["m56.gif","炸弹"],["m57.gif",  "刀"],["m58.gif","足球"],["m59.gif","音乐"],["m60.gif","便便"]
                ,["m61.gif","咖啡"],["m62.gif",  "饭"],["m63.gif","药丸"],["m64.gif","玫瑰"],["m65.gif","凋谢"],["m66.gif",  "吻"],["m67.gif","爱心"],["m68.gif","心碎"],["m69.gif","会议"],["m70.gif","礼物"]
                ,["m71.gif","电话"],["m72.gif","时间"],["m73.gif","邮件"],["m74.gif","电视"],["m75.gif","太阳"],["m76.gif","月亮"],["m77.gif",  "强"],["m78.gif",  "弱"],["m79.gif","握手"],["m80.gif","胜利"]
                ,["m81.gif","多多"],["m82.gif","美女"],["m83.gif","汉良"],["m84.gif","毛毛"],["m85.gif", "Q仔"],["m86.gif","飞吻"],["m87.gif","怄火"],["m88.gif","白酒"],["m89.gif","汽水"],["m90.gif","西瓜"]
         ]
 ]
,[
         ["QGG"]
        ,["QGG/"]
        ,[
                 [ "m1.gif",""],[ "m2.gif",""],[ "m3.gif",""],[ "m4.gif",""],[ "m5.gif",""],[ "m6.gif",""],[ "m7.gif",""],[ "m8.gif",""],[ "m9.gif",""],["m10.gif",""]
                ,["m11.gif",""],["m12.gif",""],["m13.gif",""],["m14.gif",""],["m15.gif",""],["m16.gif",""],["m17.gif",""],["m18.gif",""],["m19.gif",""],["m20.gif",""]
                ,["m21.gif",""],["m22.gif",""],["m23.gif",""],["m24.gif",""],["m25.gif",""],["m26.gif",""],["m27.gif",""],["m28.gif",""],["m29.gif",""]
         ]
 ]
,[
         ["QMM"]
        ,["QMM/"]
        ,[
                 [ "m1.gif",""],[ "m2.gif",""],[ "m3.gif",""],[ "m4.gif",""],[ "m5.gif",""],[ "m6.gif",""],[ "m7.gif",""],[ "m8.gif",""],[ "m9.gif",""],["m10.gif",""]
                ,["m11.gif",""],["m12.gif",""],["m13.gif",""],["m14.gif",""],["m15.gif",""],["m16.gif",""],["m17.gif",""],["m18.gif",""],["m19.gif",""],["m20.gif",""]
                ,["m21.gif",""],["m22.gif",""],["m23.gif",""],["m24.gif",""],["m25.gif",""],["m26.gif",""],["m27.gif",""],["m28.gif",""],["m29.gif",""],["m30.gif",""]
                ,["m31.gif",""],["m32.gif",""],["m33.gif",""]
         ]
 ]
,[
         ["猪猪"]
        ,["PIGPIG/"]
        ,[
                 [ "m1.gif","饱"],[ "m2.gif","愁"],[ "m3.gif","倒"],[ "m4.gif","等着瞧"],[ "m5.gif","烦"],[ "m6.gif","浮水"],[ "m7.gif","浮水2"],[ "m8.gif","害怕"],[ "m9.gif","害羞"],["m10.gif","惊吓"]
                ,["m11.gif","惊吓"],["m12.gif","欺负"],["m13.gif","潜水"],["m14.gif","潜水2"],["m15.gif","为人民币服务"],["m16.gif","我走了"],["m17.gif","无聊"],["m18.gif","喜"],["m19.gif","有病"],["m20.gif","有型"]
                ,["m21.gif","伤心"],["m22.gif","切"],["m23.gif","吐"],["m24.gif","呆"],["m25.gif","大笑"],["m26.gif","害羞"],["m27.gif","惊"],["m28.gif","拜拜"],["m29.gif","无奈"],["m30.gif","晕"]
                ,["m31.gif","期待"],["m32.gif","猪泪奔"],["m33.gif","鬼脸"]
         ]
 ]
,[
         ["酷比"]
        ,["KUBI/"]
        ,[
                 [ "m1.gif","鼻涕"],[ "m2.gif","抽泣"],[ "m3.gif","大笑"],[ "m4.gif","得意"],[ "m5.gif","点头"],[ "m6.gif","点头哭"],[ "m7.gif","害羞"],[ "m8.gif","汗"],[ "m9.gif","僵尸"],["m10.gif","惊恐"]
                ,["m11.gif","开心"],["m12.gif","脸红"],["m13.gif","墨镜"],["m14.gif","难过"],["m15.gif","呕吐"],["m16.gif","翘翘"],["m17.gif","傻眼"],["m18.gif","生气"],["m19.gif","睡"],["m20.gif","喜欢"]
                ,["m21.gif","牙痒痒"],["m22.gif","晕"],["m23.gif","眨眼"],["m24.gif","章鱼嘴"]
         ]
 ]
];
 
var giMoTabs = gvMoData.length;
var gbMoNeedHidden = false;
 
function Gel(id, obj) {
        obj = (obj == null ? document : obj);
        return obj.getElementById(id);
}
 
function moCalcCurPages() {
        var iDLen = gvMoData[giMoCurTab][2].length;
        var iPLen = giMoRowNum * giMoColNum;
        var fv = iDLen / iPLen;
        if (iDLen % iPLen == 0) {
                return fv == 0 ? 1 : parseInt(fv);
        }
        else {
                return Math.round(fv + 0.5);
        }
}
 
function moJustifyImg(oImg, iWidth, iHeight, bPos) {
        var oNewImg = new Image();
        oNewImg.src = oImg.src;
       
        var w = oNewImg.width;
        var h = oNewImg.height;
        var wb = w / iWidth;
        var hb = h / iHeight;
 
        if (wb > 1 || hb > 1) {
                //等比例缩少
                if (wb > hb) {
                        oImg.width = iWidth;
                        oImg.height = h * iHeight / w;
                }
                else {
                        oImg.width = w * iWidth / h;
                        oImg.height = iHeight;
                }
                h = oImg.height;
        }
        else {
                oImg.width = w;
                oImg.height = h;
        }
 
        if (bPos) {
                oImg.style.top = ((iHeight - h) / 2) + "px";
        }
 
        return;
}
 
function moHidePanel() {
        try{
                if (gbMoNeedHidden)
                {
                        Gel("moShowPanel").style.display = "none";
                }
        }catch(e){}
}
 
function moShow(sUrl, iOffset) {
        var obj = Gel("moShowPanel");
        if (sUrl == null || sUrl == "") {
                gbMoNeedHidden = true;
                //采用时间来延时消失以判断是否需要消失,通过此来消除不必要的闪烁
                setTimeout("moHidePanel()", 200);
        }
        else {
                gbMoNeedHidden = false;
                var div = Gel("moDivContainer");
                obj.style.top = parseInt(div.offsetTop) + "px";
                if (iOffset < giMoColNum / 2) {
                        obj.style.left = (parseInt(div.offsetLeft) + parseInt(div.offsetWidth) - giMoShowWidth) + "px";
                }
                else {
                        obj.style.left = div.offsetLeft + "px";
                }
                obj.innerHTML = "<img src='" + sUrl + "' width=" + giMoShowWidth + " height=" + giMoShowHeight + " onload='moJustifyImg(this, " + giMoShowWidth + "," + giMoShowHeight + ", true);this.style.zIndex = 1;' style='position:relative;'></img><div style='position:absolute;left:0;top:0;background:#fff;width:" + giMoShowWidth + "px;height:" + giMoShowHeight + "px;'></div>";
                obj.style.display = "";
        }
}
 
function moOver(obj, iOffset) {
        obj.style.border='1px solid #000080';
        obj.style.background='#ffeec2';
        moShow(obj.childNodes[0].childNodes[0].src, iOffset);
}
 
function moOut(obj) {
        obj.style.border='1px solid #F6F6F6';
        obj.style.background='#F6F6F6';
        moShow();
}
 
function moGetPageText() {
        return (giMoCurPage + 1) + "/" + moCalcCurPages();
}
 
function moRefreshData() {
        Gel("moTabContainer").innerHTML = moTab();
        Gel("moDivContainer").innerHTML = moTable();
        Gel("moPageText").innerHTML = moGetPageText();
}
 
function moChangeTab(iTab) {
        if (iTab >= giMoTabs && iTab != giMoCurTab) {
                return;
        }
        giMoCurPage = 0;
        giMoCurTab = iTab;
        moRefreshData();
}
 
function moNextPage() {
        if (giMoCurPage + 1 >= moCalcCurPages()) {
                return ;
        }
        giMoCurPage += 1;
        moRefreshData();
}
 
function moPrevPage() {
        if (giMoCurPage <= 0) {
                return ;
        }
        giMoCurPage -= 1;
        moRefreshData();
}
 
function moCell(iCurTab, iCurPage, iNum, iOffset) {
        iNum = iCurPage * giMoRowNum * giMoColNum + iNum;
        var data = gvMoData[iCurTab][2];
        if (iNum >= data.length) {
                return "";
        }
        var sSrc = gvMoData[iCurTab][1] + data[iNum][0];
        return "<img data='" + sSrc + "' src='./images/mo/" + sSrc + "' title='" + data[iNum][1] + "' width=" + giMoCellWidth + " height=" + giMoCellHeight + " onload='moJustifyImg(this, " + giMoCellWidth + "," + giMoCellHeight + ", true);' style='position:relative;'></img>";
}
 
function moTable() {
        var pdivh = "<div style='width:" + giMoCellWidth + "px;height:" + giMoCellHeight + "px;'>";
        var code = "<table cellpadding=0 cellspacing=1 bgcolor=#DFE6F6>";
        for (var i = 0; i < giMoRowNum; i++) {
                code += "<tr>";
                for (var j = 0; j < giMoColNum; j++) {
                        var cell = moCell(giMoCurTab, giMoCurPage, i * giMoColNum + j, j);
                        code += "<td align=center valign=middle width=" + (giMoCellWidth+2) + "px height=" + (giMoCellHeight+2) + "px style='background:#f6f6f6;padding:1px;border:1px solid #F6F6F6;' " + (cell != "" ? "onmouseover='moOver(this, " + j + ");' onmouseout='moOut(this);'>" + pdivh + cell : ">" + pdivh) + "</div></td>";
                }
                code += "</tr>";
        }
        return code + "</table>";
}
 
function moTab() {
        var code = "";
        for (var i = 0; i < giMoTabs; i++) {
                code += "<span style='color:" + (giMoCurTab == i ? "#000;border:1px solid #DFE6F6;font-weight:bold;border-bottom:1px solid #f6f6f6;border-top:2px solid #FFC83C" : "#000" ) + ";padding:3px 7px 2px 7px;cursor:pointer;' onclick='moChangeTab(" + i + ")'>" + gvMoData[i][0] + "</span>";
        }
        return code;
}
 
function moBtnMouse(obj, down) {
        var s = obj.style;
        s.position = "relative";
        s.top = down ? "1px" : "0px";
        s.left = down ? "1px" : "0px";
}
 
function moCube() {
        return "<div style='padding:10px 5px 0 5px;'><div id='moTabContainer' style='font:normal 12px Verdana;color:#000;padding:2px 6px'>" + moTab() + "</div><div id='moDivContainer'>" + moTable() + "</div><div align=right style='font-size:12px;padding:5px 0 5px 0;color:#000;'><span style='margin:0 10px 0 0;color:#000;font:normal 12px Verdana;' id='moPageText'>" + moGetPageText() + "</span><span style='cursor:pointer;margin:0 2px 0 2px;font-weight:bold;background:#eff7ff;border:1px solid #8ba8c8;color:#000;padding:2px 8px 0 8px' onclick='moPrevPage();' onmousedown='moBtnMouse(this,1);' onmouseup='moBtnMouse(this,0);' title='上一页'>&lt;</span><span style='cursor:pointer;margin:0 2px 0 2px;font-weight:bold;background:#eff7ff;border:1px solid #8ba8c8;color:#000;padding:2px 8px 0 8px' onclick='moNextPage();' onmousedown='moBtnMouse(this,1);' onmouseup='moBtnMouse(this,0);' title='下一页'>&gt;</span></div><div id='moShowPanel' style='background:#fff;position:absolute;left:0;top:0;border:1px solid #004B97;width:" + giMoShowWidth + "px;height:" + giMoShowHeight + "px;text-align:center;display:none'></div></div>";
}
