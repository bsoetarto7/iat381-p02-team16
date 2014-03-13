$(document).ready(function(){
	//debuggin code	
	$("img.menu").click(function(){
		if(($(this).attr("id"))=="unselected"){
			console.log($(this).attr("id"))
			$(this).attr("id","selected");
			$("a#selectside2.sideNone").attr("class","sideonpage")
										.attr("href","choosetoppings.html");
			$("a#selectside3.sideNone").attr("class","sideonpage")
										.attr("href","choosesoup.html");
			$("a#selectside4.sideNone").attr("class","sideonpage")
										.attr("href","donenood.html");
			$("a#selectside5.sideNone").attr("class","sideonpage")
										.attr("href","donenood.html");
		}
		else{
			$(this).attr("id","unselected");
		}  		
	});

	$("#div1").show();
   	$("#div2").hide();
   	$("#signinpop").show();
   	$("#registerpop").show();
    		
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

	$("div#mobile2").hide();
	$("#tablet2").hide();

	$(".menutop").click( function(){
		$("#mobile2").slideToggle(1000);
	})
	$(".menutop1").click( function(){
		$("#tablet2").slideToggle(1000);
	})

	


/*----------------------------- Sidebar scroll to with an offset -----------------------------*/
	$("#aboutusbutton").click( function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#aboutus", 1000, {offset:({ top:-123, left:0 }) } );
	});

	$("#historybutton").click( function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#history", 1000, {offset: ({ top:-123, left:0 })} );
	});

	$("#cartnoodlesbutton").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#cartnoodles", 1000, {offset:({ top:-121.8, left:0 }) } );
	});

	$("#soupbutton").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#soup", 1000, {offset: ({ top:-121.8, left:0 })} );
	});
	$("#drinksbutton").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#drinks", 1000, {offset: ({ top:-121.8, left:0 })} );
	});
	$("#dessertbutton").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#dessert", 1000, {offset: ({ top:-121.8, left:0 })} );
	});

	$("#newsmobileN").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#news", 1000, {offset: ({ top:-120, left:0 })} );
	});
	$("#newsmobileP").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#promotion", 1000, {offset: ({ top:-120, left:0 })} );
	});
	$("#newsmobileE").on('click', function(clickEvent) {
		clickEvent.preventDefault();
		$(window).scrollTo( "#events", 1000, {offset: ({ top:-120, left:0 })} );
	});

});