$(document).ready(function() {
	
	$("p").hide();
	
	$(".image").click(function() {
		$(this).children("p").toggle();
	});
	var gSelected = true;
	$(".headButton1").click(function(){
		$(".g").slideToggle(300)
		$(".titleg").slideToggle(300)
		//stuff happens when you click the G button
		if(gSelected==true){
			$(".headButton1").css("border-color","rgba(149,165,166,0");
			gSelected = false;
		}else{
			$(".headButton1").css("border-color","rgba(149,165,166,0.6)");
			gSelected = true;
		};
	});
	var pgSelected = true;
	$(".headButton2").click(function(){
		$(".titlepg").slideToggle(300)
		$(".pg").slideToggle(300)
		//stuff happens when you click the PG button
		if(pgSelected==true){
			$(".headButton2").css("border-color","rgba(149,165,166,0");
			pgSelected = false;
		}else{
			$(".headButton2").css("border-color","rgba(149,165,166,0.6)");
			pgSelected = true;
		};		
	});
	var pg13_Selected = true;
	$(".headButton3").click(function(){
		$(".pg13").slideToggle(300)
		$(".title13").slideToggle(300)
		//stuff happens when you click the PG-13 button
			if(pg13_Selected==true){
			$(".headButton3").css("border-color","rgba(149,165,166,0");
			pg13_Selected = false;
		}else{
			$(".headButton3").css("border-color","rgba(149,165,166,0.6)");
			pg13_Selected = true;
		};
	});
	var rSelected = true;
	$(".headButton4").click(function(){
		$(".r").slideToggle(300)
		$(".titler").slideToggle(300)
		//stuff happens when you click the R button
		if(rSelected==true){
			$(".headButton4").css("border-color","rgba(149,165,166,0");
			rSelected = false;
		}else{
			$(".headButton4").css("border-color","rgba(149,165,166,0.6)");
			rSelected = true;
		};	
	});
$(".question").click(function(){
		$("#explanation").toggle()
	});

});
