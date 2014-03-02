$(document).ready(function(){
	//debuggin code	
	$("img").click(function(){
		if(($(this).attr("id"))=="unselected"){
			console.log($(this).attr("id"))
			$(this).attr("id","selected");
			$("a#selectside2.sideNone").attr("class","sideonpage")
										.attr("href","choosetoppings.html");
			$("a#selectside3.sideNone").attr("class","sideonpage")
										.attr("href","choosesoup.html");
			$("a#selectside4.sideNone").attr("class","sideonpage")
										.attr("href","donenood.html");
		}
		// if(($(this).attr("id"))==="selected"){
		// 	$(this).attr("id","unselected");
		// }  		
	});

	$("#div1").show();
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

/*----------------------------- Sidebar scroll to with an offset -----------------------------*/
	$("#aboutusbutton").on('click', function() {
		$("body").scrollTo( "#aboutus", 1000, {offset:({ top:-150, left:0 }) } );
	});

	$("#historybutton").on('click', function() {
		$("body").scrollTo( "#history", 1000, {offset: ({ top:-55, left:0 })} );
	});

	$("#cartnoodlesbutton").on('click', function() {
		$("body").scrollTo( "#cartnoodles", 1000, {offset:({ top:-250, left:0 }) } );
	});

	$("#soupbutton").on('click', function() {
		$("body").scrollTo( "#soup", 1000, {offset: ({ top:-150, left:0 })} );
	});
	$("#drinksbutton").on('click', function() {
		$("body").scrollTo( "#drinks", 1000, {offset: ({ top:-150, left:0 })} );
	});
	$("#dessertbutton").on('click', function() {
		$("body").scrollTo( "#dessert", 1000, {offset: ({ top:-150, left:0 })} );
	});

});