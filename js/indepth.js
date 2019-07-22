$(document).ready(function(){
	$(".show").fancybox();
    $(".show").attr('rel', 'lb_info').fancybox({padding: 0});

    $("#inicio-bar").click(function(){
    	$("#directores").hide();
    	$("#jornadas").hide();
    	$("#inicio").show();
    });

	$("#directores-bar").click(function(){
    	$("#directores").show();
    	$("#jornadas").hide();
    	$("#inicio").hide();
    });

    $("#jornadas-bar").click(function(){
    	$("#directores").hide();
    	$("#jornadas").show();
    	$("#inicio").hide();
    });
});