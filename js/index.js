// array of apps as json

function updateStatus() {
	if (localStorage == 0) {
		$("#status").html("You're not a supporter");
	} else {
		$("#status").html(`You've supported me <b>${localStorage.supports}</b> times.`);
	}

	var background = "";
	var text = "";
	var border = "0";

	if (localStorage.supports >= 2500) {
		background = "#eb909f";
		text = "#d9bed1";
		border = "5px";
		$("img").attr("src", "../images/faces/face.008.jpeg");
	} else if (localStorage.supports >= 1000) {
		background = "#fe71cf";
		text = "#fffb97";
		$("img").attr("src", "../images/faces/face.007.jpeg");
	} else if (localStorage.supports >= 500) {
		background = "#060d15";
		text = "#ede0fa";
		$("img").attr("src", "../images/faces/face.006.jpeg");
	} else if (localStorage.supports >= 250) {
		background = "black";
		text = "red";
		$("img").attr("src", "../images/faces/face.005.jpeg");
	} else if (localStorage.supports >= 100) {
		background = "white";
		text = "black";
		$("img").attr("src", "../images/faces/face.009.jpeg");
	} else {
			background = "white";
		text = "black";
		$("img").attr("src", "../images/faces/face.003.jpeg");
	}

	$("*").css("color", text);
	$("*").css("background-color", background);
	$(".button").css("border-color", text);

	$("#main img").css("border-width", border);

	$(".button").hover(function() {
		$(this).css("background-color", text);
		$(this).css("color", background);
	}, function() {
		$(this).css("background-color", background);
		$(this).css("color", text);
	});
}

$("#support").click(function() {
	$("img").animate({opacity: 0.1}, 500).animate({opacity: 1}, 500);
	localStorage.supports++;
	updateStatus();
});

$("#main status").ready(function() {
	if (!localStorage.supports) {
		localStorage.supports = 0;
	}
	updateStatus();
});

$("#navbar #button").click(function() {
	$("#overlay").fadeToggle();
});

$("#overlay").ready(function() {
	$("#overlay").fadeToggle();
});
