

    var _r = "";
    var color_table=[
    ['000000','993300','333300','003300','003366','000080','333399','333333'],
    ['800000','FF6600','808000','008000','008080','0000FF','666699','808080'],
    ['FF0000','FF9900','99CC00','339966','33CCCC','3366FF','800080','999999'],
    ['FF00FF','FFCC00','FFFF00','00FF00','00FFFF','00CCFF','993366','C0C0C0'],
    ['FF99CC','FFCC99','FFFF99','CCFFCC','CCFFFF','99CCFF','CC99FF','FFFFFF']
    ];
    function a1(obj)
    {
            obj.style.border='1px solid #000080';
            obj.style.background='#FFEEC2';
    }
    function a2(obj)
    {
            obj.style.border='1px solid #F6F6F6';
            obj.style.background='#F6F6F6';
    }
    function paintCell(color)
    {
            //_r += '<TD BGCOLOR="' + color + '" style="height:12px;width:12px;">';
            _r += '<TD style="padding:2px;background:#f6f6f6;border:1px solid #f6f6f6" onmouseover="a1(this)" onmouseout="a2(this)">';
            _r += "<IMG src='/htmledition/images/spacer.gif' HEIGHT=12 WIDTH=12 style='border:1px solid #ccc;background:#" + color +"'></TD>";
    }
    function paintRow(color_row) //一行
    {      
            _r +='<TR>';
            for (var i = 0,l=color_row.length; i < l; ++i)
            {
                    paintCell(color_row[i]);
            }
            _r +='</TR>';
    }
    function paintTable(b) //表格
    {
            _r +='<TABLE CELLPADDING=0 CELLSPACING=0 style="border:5px solid #F6F6F6">';
            for (var i = 0,l=b.length; i < l; ++i) {
                    paintRow(b[i]);
            }
            _r +='</TABLE>';
    }
    function paintCube() { //大边框     
            _r += '<TABLE CELLPADDING=0 CELLSPACING=0 style="border:1px solid #888;"><TR>';
            _r +='<TD BGCOLOR="#FFFFFF">';
            paintTable(color_table);
            _r +=('</TD>');
            _r +='</TR></TR></TABLE>';
            return _r;
    }

