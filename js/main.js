var collabo = {};

collabo.friends = [
	"amy",
	"amanda",
	"brittany",
	"dallas",
	"danny",
	"emily",
	"henry",
	"jane",
	"jen",
	"jennifer",
	"johnl",
	"johnm",
	"karly",
	"ksenija",
	"lee",
	"marlo",
	"milena",
	"nigel",
	"ryle",
	"shawn",
	"sunny",
	"tohar",
	"tyn"
	];

collabo.init = function() {
	collabo.build(collabo.friends);
};

collabo.build = function(students) {
	collabo.friends.sort(function() {
		return 0.5 - Math.random();
	});
	$.each(students, function(i){
		var name = students[i];
		var image = "<img src=\'images/" + name + ".jpg'>";
		var link = "<a href='students/" + name + ".html'>";
		var title = "<h2>" + name + "</h2>";
		var container = "<li>" + link + title + image + "</a></li>";
		$('ul.friend').append(container);
	});
};

$(function() {
	collabo.init();
});

