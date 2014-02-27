$(document).ready(function(){
	//debuggin code	
	$("img").click(function(){
		if(($(this).attr("id"))==="unselected"){
			$(this).attr("id","selected");
			$("a#selectside2.sideNone").attr("class","sideonpage")
										.attr("href","choosetoppings.html");
			$("a#selectside3.sideNone").attr("class","sideonpage")
										.attr("href","choosesoup.html");
			$("a#selectside4.sideNone").attr("class","sideonpage")
										.attr("href","donenood.html");
		}
		else{
			$(this).attr("id","unselected");
		}  		
	});

	$("#div1").hide();
   	$("#div2").hide();
   	$("#signinpop").hide();
   	$("#registerpop").hide();
    		
	$("#dineinBut").on('click', function() {
   		$("#div1").fadeIn();
   		$("#div2").fadeOut();
	});
	$("#takeoutBut").on('click', function() {
   		$("#div2").fadeIn();
   		$("#div1").fadeOut();
	});

	$(".signin").on('click', function() {
   		$("#signinpop").fadeIn();
   		$("#registerpop").fadeOut();
	});
	$(".register").on('click', function() {
   		$("#signinpop").fadeOut();
   		$("#registerpop").fadeIn();
	});


});