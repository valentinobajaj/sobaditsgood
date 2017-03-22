//coding by Maarten Ronteltap
// API key = 9961a998f004227dea7c58371f36ef5f

$(document).ready(function() {

	//Whenever the form is changed, all of the code below is running
	$("#search-form").submit(function(e) {
		//set Base URL
		var baseURL = "https://api.themoviedb.org/3/search/movie?vote_average.lte=5&vote_average.gte=0.1&vote_count.gte=10&page=1&include_video=false&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f";
		
		//create URL suffix...
		var suffix = "";

		//...first for the genres...
		var searchIt = "&query=";
		
       		var searchValue = $("#searching").val();
       		searchIt = searchIt.concat(searchValue);
	        suffix = suffix.concat(searchIt);
	        console.log(suffix);



		// now create a complete URL and include it in the search settings
		var advancedSearchURL = baseURL.concat(suffix);
		console.log(advancedSearchURL);

		// //this sends the request
		$.get(advancedSearchURL, function(data) {
    		console.log(data);
    		$("#advancedsearchresults").empty();
			var i;
			for (i = 0; i < 5; i++) {
				// var image = document.createElement('img');
				var imageBaseUrl = "https://image.tmdb.org/t/p/w300";
				var posterPath = data.results[i].poster_path;
				var imageLocation = imageBaseUrl.concat(posterPath);
				var movieBaseUrl = "https://www.themoviedb.org/movie/";
				var movieId = data.results[i].id;
				var movieLink = movieBaseUrl.concat(movieId)
				$("#advancedsearchresults").append("<a href=" + movieLink + " target=_blank><img src=" + imageLocation + "></a>")
			}
		});
	});
});