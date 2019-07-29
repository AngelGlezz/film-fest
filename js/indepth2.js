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
        $("#jornada").show();
    	$("#directores").fadeOut("slow");
    	$("#inicio").fadeOut("slow");
        $("#inicio-bar").css({"border-bottom": "none"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "2px solid #bb9d59"});
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
        var content = cover+header;
        $(this).next().next().next().slideToggle("slow");
        $('html, body').animate({
            scrollTop: content
        }, 2000);
        if ($('.item-icon').hasClass('mas'))
        {
            $('.item-icon').removeClass('mas');
            $('.item-icon').addClass('menos');
            $('.item-icon').html('_').css({'top': '-10px'});
        }
        else {
            $('.item-icon').addClass('mas');
            $('.item-icon').removeClass('menos');
            $('.item-icon').html('+').css({'top': '0px'});
        }
    });

    $(".subtitle").click(function(){
        var cover = parseInt($("#indepth_cover").css("height"));
        var header = parseInt($("#content-header").css("height"));
        var content = cover+header;
        $(this).next().next().slideToggle("slow");
        $('html, body').animate({
            scrollTop: content
        }, 2000);
        if ($('.item-icon').hasClass('mas'))
        {
            $('.item-icon').removeClass('mas');
            $('.item-icon').addClass('menos');
            $('.item-icon').html('_').css({'top': '-10px'});
        }
        else {
            $('.item-icon').addClass('mas');
            $('.item-icon').removeClass('menos');
            $('.item-icon').html('+').css({'top': '0px'});
        }
    });
});