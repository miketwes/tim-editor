$(document).ready(function() {
    var interval;
    function applyAjaxFileUpload(element) {
        $(element).AjaxFileUpload({
            action: "php/upload.php",
            onComplete: function(filename, response) {

                if (typeof(response.error) === "string") {

                    alert(response.error);
                    return;
                }
                $("#content").append('<div id="imgo"><img src="php/' + response.name + '"   alt="img"></div>');
            }
        });
    }
    applyAjaxFileUpload("#demo1");
});

$('#editControls a').click(function(e) {
    switch ($(this).data('role')) {
        case 'h1':
        case 'h2':
        case 'p':
            document.execCommand('formatBlock', false, '<' + $(this).data('role') + '>');
            break;

        case 'fco':
            document.execCommand('ForeColor', false, '#AA0000')
            break;

        case 'inp':
            var sPhoto = prompt("请输入图片位置:", "http://");
            if ((sPhoto != null) && (sPhoto != "http://")) {
                format("InsertImage", sPhoto);
            }
            break;
        default:
            document.execCommand($(this).data('role'), false, null);

            break;
    }
})

function ShowSource() {
    var htmlContent = document.getElementById('content').innerHTML;
    if (document.getElementById('content').style.display == 'block') {
        document.getElementById('content').style.display = 'none';
        document.getElementById('htmlText').value = htmlContent;
        document.getElementById('textDiv').style.display = 'block';
        document.getElementById('htmlText').focus();
        document.getElementById('content').value = 'HTML';
    } else {
        document.getElementById('content').style.display = 'block';
        document.getElementById('textDiv').style.display = 'none';
        document.getElementById('content').innerHTML = document.getElementById('htmlText').value;
        document.getElementById('content').focus();
        document.getElementById('content').value = ' 源代码 ';
    }
}

function createImg() {
    var sPhoto = prompt("请输入图片位置:", "http://");
    if ((sPhoto != null) && (sPhoto != "http://")) {
        format("InsertImage", sPhoto);
    }
}

function format(type, para) {
    $("#content").focus();
    if (!para)
        document.execCommand(type, false, false)
    else
        document.execCommand(type, false, para)
    $("#content").focus();
}

var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
var forePalette = $('.fore-palette');
var backPalette = $('.back-palette');

for (var i = 0; i < colorPalette.length; i++) {
    forePalette.append('<a href="#" data-command="ForeColor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="BackColor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
}

var font_sizePalette = ['xx-small', 'x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];
var fsPalette = $('#dvPortrait2');
for (var i = 0; i < font_sizePalette.length; i++) {
    fsPalette.append('<a href="#" data-command="FontSize" class = "palette-item1" data-value="' + font_sizePalette[i] + '"><span style="font-size:' + font_sizePalette[i] + '">' + font_sizePalette[i] + '</span></a><br />');

}

var font_namePalette = ["宋体", "楷体_GB2312", "Arial", "Times New Roman", "Verdana", "Georgia", "Serif", "Tahoma"];
var fnPalette = $('#dvPortrait1');
for (var i = 0; i < font_namePalette.length; i++) {   
    fnPalette.append('<a href="#" data-command="FontName" class = "palette-item1" data-value="' + font_namePalette[i] + '"><span style="font-family:' + font_namePalette[i] + '">' + font_namePalette[i] + '</span></a><br />');
}


$(".fore-palette a, .back-palette a").click(function(e) {
    var command = $(this).data('command');
    var value = $(this).data('value');
    document.execCommand(command, false, value);
})

$(".fore-wrapper").click(function(e) {
    $(".fore-palette").toggleClass("back-palette1");

})


$(".back-wrapper").click(function(e) {
    $(".back-palette").toggleClass("back-palette1");

})

$(".editor-icon-zt").click(function() {
    $("#dvPortrait1").css("display", "block");
})


$(".editor-icon-zh").click(function() {
    $("#dvPortrait2").css("display", "block");

})

$("#dvPortrait, #dvPortrait1, #dvPortrait2").on("mouseleave", function() {

    $("#dvPortrait, #dvPortrait1, #dvPortrait2").css("display", "none");
});

function addPortrait(e) {

    var dvPortrait = document.getElementById("dvPortrait");
    var tbPortrait = document.getElementById("tbPortrait");
    var iX = e.clientX;
    var iY = e.clientY;
    dvPortrait.style.display = "";
    dvPortrait.style.left = (iX - 280) + "px";
    dvPortrait.style.top = (iY - 6) + "px";
    dvPortrait.innerHTML = '<table width="100%" border="0" cellpadding="5" cellspacing="1" style="cursor:hand" bgcolor="black" ID="tbPortrait"><tr align="left" bgcolor="#f8f8f8" class="unnamed1" align="center" ID="trContent">' + drawPortrats() + '</tr>	</table>';
}

$(".editor-icon-emoticons").click(function(e) {
    addPortrait(e);
})

$('body').on('click', "#tbPortrait img", function() {
    $("#content").append('<img src="' + this.src + '"   alt="img">');
});

$("#dvPortrait1 a").on("click", function() {

    var command = $(this).data('command');
    var value = $(this).data('value');
    document.execCommand(command, false, value);
});

$("#dvPortrait2 a").on("click", function() {

    var command = $(this).data('command');
    var value = $(this).data('value');
    changeFont(value);
});

function changeFont(fts1) {
    document.execCommand("fontSize", false, "7");
    var fontElements = document.getElementsByTagName("font");
    for (var i = 0, len = fontElements.length; i < len; ++i) {
        if (fontElements[i].size == "7") {
            fontElements[i].removeAttribute("size");
            fontElements[i].style.fontSize = fts1;
        }
    }
}
