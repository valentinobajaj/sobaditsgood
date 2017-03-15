$(document).ready(function() {
	$.ajaxSetup({
		"async": true,
		"crossDomain": true,
		"method": "GET",
		"headers": {},
		"data": "{}"
	});

	var settings = {
		"url": "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1&vote_count.gte=1000&with_genres=28",
	};

	$.ajax(settings).done(function(response) {
		console.log(response);
	});
});