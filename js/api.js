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
		delete str;
		str = $(".genres option:selected").attr("value") + ",";
		str = String(str);
		str = str.substring(0, str.length - 1);
		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=3&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_average.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f&with_genres=";
		var advancedSearchURL = baseURL.concat(str);
		$(document).ajaxSend(function() {
			$("#advancedsearchresults").empty();
			$("#advancedsearchresults").append("<h1>Searching...</h1>");
			console.log(str);
		});
		$.ajax(advancedSearchURL).done(function(response) {
			console.log(response)
		});
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