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
			$("#searchresults").empty();
			$("#searchresults").append("<h2>Here's your random movie. Have fun watching!</h2><br>");
			var movieBaseUrl = "https://www.themoviedb.org/movie/";
			function getRandomIntInclusive(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min + 1)) + min;
			};
			var i = getRandomIntInclusive(0, 19)
			var imageBaseUrl = "https://image.tmdb.org/t/p/w300";
			var posterPath = data.results[i].poster_path;
			var imageLocation = imageBaseUrl.concat(posterPath);
			var movieBaseUrl = "https://www.themoviedb.org/movie/";
			var movieId = data.results[i].id;
			var movieUrl = movieBaseUrl.concat(movieId);
			$("#searchresults").append("<a href=" + movieUrl + " target=_blank><img src=" + imageLocation + "></a>");
		});
	});
})