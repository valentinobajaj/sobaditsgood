$(document).ready(function() {
	$.ajaxSetup({
		"async": true,
		"crossDomain": true,
		"method": "GET",
		"headers": {},
		"data": "{}"
	});

	$(".genres").on("submit", function(event) {
	event.preventDefault();
	var genresString = ($(this).serialize());
	});

	var genresURL = {
		"baseURL": "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1&vote_count.gte=1000&with_genres=28",
		"URL": function() {
		((genresURL.baseURL + genresString).join(&));
		}
	};

	var baseURL = "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&language=en-US&"

	var genresURL.URL = ((genresURL.baseURL + genresString).join(&));

	$.ajax(genresURL).done(function(response) {
		console.log(response);
	});
});



// function displayVals() {
// 	var multipleGenres = $("#genres").val() || [];
// 	$( "p" ).html( "<b>Single:</b> " + singleValues +
// 		" <b>Multiple:</b> " + multipleGenres.join(",") );
// }
 
// $( "select" ).change( displayVals );
// displayVals();



// 	function showValues() {
// 		var str = $("genres").serialize();
// 		var genresstring = .text(str);
// 	}


// 	$( "input[type='checkbox'], input[type='radio']" ).on( "click", showValues );
// 	$( "select" ).on( "change", showValues );
// 	showValues();

// function showValues() {
// 	var fields = $( ":input" ).serializeArray();
// 	$( "#results" ).empty();
// 	jQuery.each( fields, function( i, field ) {
// 		$( "#results" ).append( field.value + " " );
// 	});
//   }
 
//   $( ":checkbox, :radio" ).click( showValues );
//   $( "select" ).change( showValues );
//   showValues();