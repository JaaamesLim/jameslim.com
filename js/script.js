$("#grid").ready(function() {
	for (var i = 0; i < data.length; i++) {
		element = data[i];
		$("#grid").append(`\
			<div class="card" id=${i} in-viewport="false"><a target=_blank href=\"${element.link}\">\
        <img id="thumbnail" alt="${element.name}" title="${element.name}" src=\"../images/${element.img}\">\
        <p id="name">${element.name}</p>\
        <p id="details">${element.details}</p>\
			</a></div>`);
	}
});

$("#navbar #button").click(function() {
	$("#overlay").fadeToggle();
});

$("#overlay").ready(function() {
	$("#overlay").fadeToggle();
});

$(document).scroll(function() {
	var offset = window.pageYOffset;
	var height = window.innerHeight;
	var inset = $("#grid").offset().top;
	var cards = document.getElementsByClassName("card");
	for (var i = 0; i < cards.length; i++) {
		var card = cards[i];
		var top = card.offsetTop;
		var cardHeight = card.offsetHeight;
		if (card.getAttribute("in-viewport") == "false") {
			$(`.card#${i}`).fadeTo(0, 0.01);	
			if (top + inset  < offset + height && top + inset > offset - cardHeight + 64) {
				card.setAttribute("in-viewport", "true");
				$(`.card#${i}`).fadeTo(100, 1);	
			}
		} else {
			$(`.card#${i}`).fadeTo(0, 1);	
			if (top + inset >= offset + height || top + inset < offset - cardHeight + 64) {
				card.setAttribute("in-viewport", "false");
				$(`.card#${i}`).fadeTo(100, 0.01);	
			}		
		}
	}
});