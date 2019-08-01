$(document).ready(function(){
    $(".show").fancybox({
        'centerOnScroll': true,
        'padding': 0
    });

    $("#inicio-bar").click(function(){
        $("#inicio").show();
    	$("#directores").fadeOut("slow");
    	$("#jornada").fadeOut("slow");
        $("#inicio-bar").css({"border-bottom": "2px solid #bb9d59"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "none"});
    });

	$("#directores-bar").click(function(){
    	$("#directores").show();
    	$("#jornada").fadeOut("slow");
    	$("#inicio").fadeOut("slow");
        $("#inicio-bar").css({"border-bottom": "none"});
        $("#directores-bar").css({"border-bottom": "2px solid #bb9d59"});
        $("#jornadas-bar").css({"border-bottom": "none"});
    });

    $("#jornadas-bar").click(function(){
        $("#modal").show();
        $("#jornada").show();
    	$("#directores").fadeOut("slow");
    	$("#inicio").fadeOut("slow");
        $("#inicio-bar").css({"border-bottom": "none"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "2px solid #bb9d59"});
        setTimeout(function(){ $("#modal").hide(); }, 3500);
    });

    $(".item-top-bar").click(function(){
        var cover = parseInt($("#indepth_cover").css("height"));
        var header = parseInt($("#content-header").css("height"));
        var content = cover+header;
        $('html, body').animate({
            scrollTop: content
        }, 2000);
    });

    $(".title-content").click(function(){
        var cover = parseInt($("#indepth_cover").css("height"));
        var header = parseInt($("#content-header").css("height"));
        var jornada = parseInt($(this).css("height"));
        var subtitle = parseInt($(this).next().css("height"));
        var topheight = parseInt($("#top-bar").css("height"));
        var bottommargin = parseInt($("#top-bar").css("margin-bottom"));
        var topmargin = parseInt($("#top-bar").css("margin-top"));
        var subtitlepad = 30;
        var ele = $(this).attr('ele');
        var content = cover+header+topheight+topmargin+bottommargin+((jornada+subtitle+subtitlepad)*ele);
        console.log(content,cover,header,topheight,topmargin,bottommargin,jornada,subtitle,subtitlepad,ele)
        $(this).next().next().slideToggle("slow");
        if ($(this).find('.item-icon').hasClass('mas'))
        {
            $(this).find('.item-icon').removeClass('mas');
            $(this).find('.item-icon').addClass('menos');
            $(this).find('.item-icon').html('_').css({'top': '-10px'});
            $('html, body').animate({
                scrollTop: content
            }, 2000);
        }
        else {
            $(this).find('.item-icon').addClass('mas');
            $(this).find('.item-icon').removeClass('menos');
            $(this).find('.item-icon').html('+').css({'top': '0px'});
        }
    });

    $(".subtitle").click(function(){
        var cover = parseInt($("#indepth_cover").css("height"));
        var header = parseInt($("#content-header").css("height"));
        var jornada = parseInt($(this).css("height"));
        var title = parseInt($(this).prev().css("height"));
        var topheight = parseInt($("#top-bar").css("height"));
        var bottommargin = parseInt($("#top-bar").css("margin-bottom"));
        var topmargin = parseInt($("#top-bar").css("margin-top"));
        var subtitlepad = 30;
        var ele = $(this).attr('ele');
        var content = cover+header+topheight+topmargin+bottommargin+((jornada+title+subtitlepad)*ele);
        console.log(content,cover,header,topheight,topmargin,bottommargin,jornada,title,subtitlepad,ele);
        $(this).next().slideToggle("slow");
        if ($(this).prev().find('.item-icon').hasClass('mas'))
        {
            $(this).prev().find('.item-icon').removeClass('mas');
            $(this).prev().find('.item-icon').addClass('menos');
            $(this).prev().find('.item-icon').html('_').css({'top': '-10px'});
            $('html, body').animate({
                scrollTop: content
            }, 2000);
        }
        else {
            $(this).prev().find('.item-icon').addClass('mas');
            $(this).prev().find('.item-icon').removeClass('menos');
            $(this).prev().find('.item-icon').html('+').css({'top': '0px'});
        }
    });
});