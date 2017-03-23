//coding by Maarten Ronteltap and Valentino Bajaj
//api_key=9961a998f004227dea7c58371f36ef5f

$(document).ready(function() {
	$("#basicsearch").keypress(function() {
		clearTimeout($.data(this, 'timer'));
		var wait = setTimeout(movieSearch, 500);
		$(this).data('timer', wait);
	});
	function movieSearch() {
		var movieSearch = $("#basicsearch").val();
		if (movieSearch.length > 1) {
			$("#searchresults").empty();
			console.clear();	
			var baseURL = "https://api.themoviedb.org/3/search/movie?api_key=9961a998f004227dea7c58371f36ef5f&page=1&include_adult=true";
			var suffix = "&query=";
			suffix = suffix.concat(movieSearch);
			var movieSearchURL = baseURL.concat(suffix);
			$.get(movieSearchURL, function(data) {
				var i;
				$("#searchresults").empty();
				var h3 = document.createElement("h3");
				var h3text = document.createTextNode("Select the movie you are searching for below:");
				h3.appendChild(h3text);
				$("#searchresults").append(h3);
				for (i = 0; i < data.results.length; i++) {
					var movieTitle = data.results[i].title;
					var inBetween1 = " (";
					if (data.results[i].release_date.length = 0) {
						var releaseYear = "year unknown"
					} else if (data.results[i].release_date.length > 0) {
						var releaseYear = data.results[i].release_date.substring(0,4);
					};
					var inBetween2 = ")";
					var movieString = movieTitle.concat(inBetween1,releaseYear,inBetween2);
					$("#searchresults").append("<br><button value=\42" + data.results[i].id + "\42>" + movieString + "</button>");
				};
			});
		} else {
			console.log(movieSearch)
		}
	};
	$(document).on("click", "#searchresults button", function(){
		var baseURL = "https://api.themoviedb.org/3/movie/";
		var movieId = $(this).val();
		var key = "?api_key=9961a998f004227dea7c58371f36ef5f";
		var searchById = baseURL.concat(movieId,key);
		$("#searchresults").empty();
		$("#searchresults").append("<h2>These movies are similar to " + $(this).text() + "<br>...and SO BAD THAT THEY'RE GOOD:</h2>");
		$.get(searchById, function(data){
			if (data.genres.length < 1) {
				$("#searchresults").append("<h2>Sorry, we could not find similar (BAD) movies!</h2>");
			} else {
				var x = data.genres.length;
				var i;
				var genres = "&with_genres="
				for (i = 0; i < x; i++) {
					genres += data.genres[i].id + ",";
				};
				genres = genres.substring(0, genres.length - 1);
				var baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1&vote_count.gte=10&vote_average.gte=0.1&vote_average.lte=5";
				var searchSimilar = baseURL.concat(genres);
				$.get(searchSimilar, function(data){
					var i;
					for (i = 0; i < 6; i++) {
					var imageBaseUrl = "https://image.tmdb.org/t/p/w300";
					var posterPath = data.results[i].poster_path;
					var imageLocation = imageBaseUrl.concat(posterPath);
					var movieBaseUrl = "https://www.themoviedb.org/movie/";
					var movieId = data.results[i].id;
					var movieLink = movieBaseUrl.concat(movieId)
					$("#searchresults").append("<a href=" + movieLink + " target=_blank><img src=" + imageLocation + "></a>")
					};
				});
			};
		});
	});
	$("#advancedsearch").change(function() {
		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_average.gte=0.1&vote_count.gte=10&page=1&include_video=false&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f";
		var suffix = "";
		var genres = "&with_genres=";
		$(".genres option:selected").each(function() {
			genres += $(this).attr("value") + ",";
		});
		genres = genres.substring(0, genres.length - 1);
		var suffix = suffix.concat(genres);
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
		var advancedSearchURL = baseURL.concat(suffix);
		$.get(advancedSearchURL, function(data) {
			$("#searchresults").empty();
			$("#searchresults").append("<h2>Here are your search results.<br>Have a good cringefest!</h2>")
			var i;
			for (i = 0; i < 6; i++) {
				var imageBaseUrl = "https://image.tmdb.org/t/p/w300";
				var posterPath = data.results[i].poster_path;
				var imageLocation = imageBaseUrl.concat(posterPath);
				var movieBaseUrl = "https://www.themoviedb.org/movie/";
				var movieId = data.results[i].id;
				var movieLink = movieBaseUrl.concat(movieId)
				$("#searchresults").append("<a href=" + movieLink + " target=_blank><img src=" + imageLocation + "></a>");
			};
		});
	});
});
