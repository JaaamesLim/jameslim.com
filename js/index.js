function updateStatus() {
	if (localStorage == 0) {
		$("#status").html("You're not a supporter");
	} else {
		$("#status").html(`You've supported me <b>${localStorage.supports}</b> times.`);
	}
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
