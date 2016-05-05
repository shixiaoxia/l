$(document).ready(function () {
    $("#ym1").mousemove(function () {
        $("#openym1").show();
        $("#openym2,#openym3").hide();
        

    })
    $("#ym2").mousemove(function (){
        $("#openym2").show();
        $("#openym1,#openym3").hide();
    })
    $("#ym3").mousemove(function () {
        $("#openym3").show();
        $("#openym1,#openym2").hide();

    })
})
$("#dl").click(function () {
    /*获取页面的高度和宽度*/
   var ymHeight = $(document).height();
    var ymWidth = $(document).width();
    
    /*获取可视页面的高度*/
    var ksHeight = $(window).height();
    /*创建半透明div*/
    var txc = $('<div></div>');
    txc.attr('id','txc');
    txc.css('width',ymWidth);
    txc.css('height',ymHeight);
    var txcWidth = $(txc).width()+"px";
    var txcHeight = $(txc).height()+"px";
    $("body").append(txc);
    
/*创建登陆框*/
    
    var dlk = $("<div id='dlk'>" +
        "<div id='dltop'> " +
        "<button id='gb'>X</button> " +
        "</div> " +
        "<div id='id4'>用户登陆</div>" +
        "<div id='bd'>" +
        "<form id='id2'>" +
        "<p>账号 <input id='id1' type='text' name='yhm'/></p>" +
        "<p>密码 <input id='id1' type='password' name='mm'/></p> " +
        "<input id='id3' type='submit' value='登陆'/> </form> </div> </div>");
    $("body").append(dlk);
/*获取登录框的高度和宽度*/
    var dlkHeight = $(dlk).height();
    var dlkWidth = $(dlk).width();
    var dlkTop = ksHeight/2 - dlkHeight/2 ;
    var dlkLeft = ymWidth/2 - dlkWidth/2 ;

    dlk.css('top',dlkTop);
    dlk.css('left',dlkLeft);
/*关闭登陆框和弹出层*/
    $("#gb,#txc").click (function() {
        $("#dlk,#txc").remove();


    })




})




