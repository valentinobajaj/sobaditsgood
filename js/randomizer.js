//coding by Maarten Ronteltap
//api_key=9961a998f004227dea7c58371f36ef5f

$(document).ready(function() {
	$("#surprise").click(function() {
		var surpriseBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&vote_average.gte=0.1&vote_average.lte=4";
		var page = "&page=";
		var randomPage = function(random) {
			random = Math.floor((Math.random() * 840) + 1);
		};
		page = page.concat(randomPage);
		var surpriseUrl = surpriseBaseUrl.concat(page);
		var settings = {
			"async": true,
			"crossDomain": true,
			"method": "GET",
			"headers": {},
			"data": "{}"
		};
		settings.url = surpriseUrl;
		$.ajax(settings).done(function(data) {
			var movieBaseUrl = "https://www.themoviedb.org/movie/";
			var i = Math.floor(Math.random() * 20);
			var movieId = data.results[i].id;
			var movieUrl = movieBaseUrl.concat(movieId);
			window.open(movieUrl, '_self');
		});
	});
})