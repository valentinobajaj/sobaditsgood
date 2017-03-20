//coding by Maarten Ronteltap

$(document).ready(function() {

	//Whenever the form is changed, all of the code below is running
	$("#advancedsearch").change(function() {
		
		//set Base URL
		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_average.gte=0.1&vote_count.gte=10&page=1&include_video=false&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f";
		
		//create URL suffix...
		var suffix = "";

		//...first for the genres...
		var genres = "&with_genres=";
		$(".genres option:selected").each(function() {
			genres += $(this).attr("value") + ",";
		});
		genres = genres.substring(0, genres.length - 1);
		var suffix = suffix.concat(genres);

		//...then for how the results are to be sorted...
		var sort = "&sort_by=";
		function sortValue() {
			var sort = document.querySelectorAll(".sort");
			var radioValue = "";
			var i;
			for (i = 0; i < sort.length; i++) {
				if (sort[i].checked) {
					radioValue = radioValue + sort[i].value;
					return radioValue
				}
			}	
		};
		var sortValue = sortValue();
		sort = sort.concat(sortValue);
		suffix = suffix.concat(sort);

		//...then whether adult content should be included in the search results.
		var adult = "&include_adult="
		function adultValue() {
			var adult = document.querySelectorAll(".adult");
			var radioValue = "";
			var i;
			for (i = 0; i < adult.length; i++) {
				if (adult[i].checked) {
					radioValue = radioValue + adult[i].value;
					return radioValue
				}
			}
		};
		var adultValue = adultValue();
		adult = adult.concat(adultValue);
		suffix = suffix.concat(adult);

		// now create a complete URL and include it in the search settings
		var advancedSearchURL = baseURL.concat(suffix);


		//ThemovieDB.org wants these search settings to always be included
		var advancedSearchSettings = {
			"async": true,
			"crossDomain": true,
			"method": "GET",
			"headers": {},
			"data": "{}"
		};
		advancedSearchSettings.URL = advancedSearchURL;

		//check which parameters are included before the AJAX request is sent
		console.log(advancedSearchSettings);

		//display "Searching..." message while the search is running
		$(document).ajaxSend(function() {
			$("#advancedsearchresults").empty();
			$("#advancedsearchresults").append("<h1>Searching...</h1>");
		});


		//this sends the request
		$.ajax(advancedSearchSettings);

		//this is the success handler
		$(document).ajaxSuccess(function(data) {
			$("#advancedsearchresults").empty();
			console.log(data);
			var i;
			for (i = 0; i < 5; i++) {
				var image = document.createElement('img');
				var imageBaseUrl = "https://image.tmdb.org/t/p/w500";
				var posterPath = data[i].results.poster_path;
				var imageLocation = imageBaseUrl.concat(posterPath);
				$(image).attr('src', imageLocation);
				$('#advancedsearchresults').append(image);
				console.log(results[i].poster_path)
			}
		});

		// this is the error handler
		$(document).ajaxError(function() {
		$("#advancedsearchresults").empty();
		$("#advancedsearchresults").append("<h1>There was a problem. Please try again later!</h1>");
		});
	});
});