//coding by Maarten Ronteltap

$(document).ready(function() {
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
	$("#advancedsearch").change(function() {
		var str = "";
		$(".genres option:selected").each(function() {
			str += $(this).attr("value") + ",";
		});
		str = str.substring(0, str.length - 1);
		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_average.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f&with_genres=";
		var advancedSearchURL = baseURL.concat(str);
		console.log(str);
		$(document).ajaxSend(function() {
			$("#advancedsearchresults").empty();
			$("#advancedsearchresults").append("<h1>Searching...</h1>");
		});
		$.ajax(advancedSearchURL).done(function(response) {
			$("#advancedsearchresults").empty();
			console.log(response)
		});
	});


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