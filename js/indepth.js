$(document).ready(function(){
    $(".show").fancybox({
        'centerOnScroll': true,
        'padding': 0
    });

    $("#inicio-bar").click(function(){
    	$("#directores").hide();
    	$("#jornadas").hide();
    	$("#inicio").show();
        $("#inicio-bar").css({"border-bottom": "2px solid #bb9d59"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "none"});
    });

	$("#directores-bar").click(function(){
    	$("#directores").show();
    	$("#jornadas").hide();
    	$("#inicio").hide();
        $("#inicio-bar").css({"border-bottom": "none"});
        $("#directores-bar").css({"border-bottom": "2px solid #bb9d59"});
        $("#jornadas-bar").css({"border-bottom": "none"});
    });

    $("#jornadas-bar").click(function(){
    	$("#directores").hide();
    	$("#jornadas").show();
    	$("#inicio").hide();
        $("#inicio-bar").css({"border-bottom": "none"});
        $("#directores-bar").css({"border-bottom": "none"});
        $("#jornadas-bar").css({"border-bottom": "2px solid #bb9d59"});
    });
});