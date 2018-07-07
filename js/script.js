$("#grid").ready(function() {
	data.forEach(function(element) {
		$("#grid").append(`\
			<div class="card"><a target=_blank href=\"${element.link}\">\
        <img id="thumbnail" alt="${element.name}" title="${element.name}" src=\"../images/${element.img}\">\
        <p id="name">${element.name}</p>\
        <p id="details">${element.details}</p>\
			</a></div>`);
	});
});