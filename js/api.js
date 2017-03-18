//coding by Maarten Ronteltap

$(document).ready(function() {
	$.ajaxSetup({
		"async": true,
		"crossDomain": true,
		"method": "GET",
		"headers": {},
		"data": "{}"
	});
	$("#advancedsearch").change(function() {
		var suffix = "";
		var genres = "&with_genres=";
		$(".genres option:selected").each(function() {
			genres += $(this).attr("value") + ",";
		});
		genres = genres.substring(0, genres.length - 1);
		var suffix = suffix.concat(genres);
		console.log("suffix after genres = " + suffix);

		var sort = "&sort_by=";

		var sortValue = function() {
			var sort = document.forms[0];
			var radioValue = "";
			var i;
			for (i = 0; i < sort.length; i++) {
				if (sort[i].checked) {
					radioValue = radioValue + sort[i].value;
					return value
				}
			}
		};
		sort = sort.concat(sortValue);
		suffix = suffix.concat(sort);
		console.log("suffix after sort = " + suffix);

		// console.log(suffix);
		// var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_average.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f&with_genres=";
		// var advancedSearchURL = baseURL.concat(str);		
		// $(document).ajaxSend(function() {
		// 	$("#advancedsearchresults").empty();
		// 	$("#advancedsearchresults").append("<h1>Searching...</h1>");
		// });
		// $.ajax(advancedSearchURL).done(function(response) {
		// 	$("#advancedsearchresults").empty();
		// 	console.log(response)
		// });
	});
});

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
// 		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_average.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f&with_genres=";
// 		var advancedSearchURL = baseURL.concat(str);
// 		console.log(str);
// 		$(document).ajaxSend(function() {
// 			$("#advancedsearchresults").empty();
// 			$("#advancedsearchresults").append("<h1>Searching...</h1>");
// 		});
// 		$.ajax(advancedSearchURL).done(function(response) {
// 			$("#advancedsearchresults").empty();
// 			console.log(response)
// 		});
// 	});
// });