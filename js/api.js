//coding by Maarten Ronteltap
// API key = 9961a998f004227dea7c58371f36ef5f

$(document).ready(function() {
<<<<<<< HEAD
	 $("##search-form").submit(function(e) {
		$.ajaxSetup({
			url: "https://api.themoviedb.org/3/search/movie",
			async: true,
			crossDomain: true,
			method: "GET",
			headers: {},
			data: {
				api_key: "9961a998f004227dea7c58371f36ef5f"
				query: "john",
			}
			

			success: showImages
		});

	return false
	})
});
=======

	//Whenever the form is changed, all of the code below is running
>>>>>>> master
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
<<<<<<< HEAD


function showImages(data) {
    $("#search-result").html("");

    for (i in data.results) {
        var image = document.createElement('img');
        var path = "https://image.tmdb.org/t/p/w500"
        $(image).attr('src', path.concat(data.results[i].poster_path));
        $('#search-result').append(image);
	    }
	}
// BACKUP:
// $(document).ready(function() {
// 	$.ajaxSetup({
// 		"async": true,
// 		"crossDomain": true,
// 		"method": "GET",
// 		"headers": {},
// 		"data": "{}"
// 	});
// 	$("#advancedsearch").change(function() {
// 		var str = "";
// 		$(".genres option:selected").each(function() {
// 			str += $(this).attr("value") + ",";
// 		});
// 		str = str.substring(0, str.length - 1);
// 		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=3&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_average.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f&with_genres=";
// 		var advancedSearchURL = baseURL.concat(str);
// 		$(document).ajaxSend(function() {
// 			$("#advancedsearchresults").empty();
// 			$("#advancedsearchresults").append("<h1>Searching...</h1>");
// 			console.log(str);
// 		});
// 		$.ajax(advancedSearchURL).done(function(response) {
// 			console.log(response)
// 		});
// 	});
// });
=======
});
>>>>>>> master
