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
		var sort = "&sort_by="
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
		console.log(suffix);
		var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=5&vote_count.gte=10&page=1&include_video=false&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f";
		var advancedSearchURL = baseURL.concat(suffix);		
		$(document).ajaxSend(function() {
			$("#advancedsearchresults").empty();
			$("#advancedsearchresults").append("<h1>Searching...</h1>");
		});
		$.ajax(advancedSearchURL).done(function(response) {
			$("#advancedsearchresults").empty();
			console.log(response)
		});
	});
});