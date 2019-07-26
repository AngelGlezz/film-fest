$(document).ready(function(){
    $(".show").fancybox({
        'centerOnScroll': true,
        'padding': 0
    });

    $("#inicio-bar").click(function(){
        $("#inicio").show();
    	$("#directores").fadeOut("slow");
    	$("#jornadas").fadeOut("slow");
        $("#inicio-bar").css({"border-bottom": "2px solid #bb9d59"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "none"});
    });

	$("#directores-bar").click(function(){
    	$("#directores").show();
    	$("#jornadas").fadeOut("slow");
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

    $(".title-content").click(function(){
        $(this).next().next().slideToggle("slow");
        $(this).next().next().animate({
          top: 0
        },900);
    });

    
});