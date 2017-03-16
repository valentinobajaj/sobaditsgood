$(document).ready(function() {
	$.ajaxSetup({
		"async": true,
		"crossDomain": true,
		"method": "GET",
		"headers": {},
		"data": "{}"
	});
	$("#genres").change(function () {
		var str = "";
		$("#genres option:selected").each(function() {
		str += $(this).attr("value") + ",";
		});
		console.log(str);
		var genreId = $("genres option:selected").attr("value");
		console.log(genreId)
	});
});

// function createGenresString() {
// 	var genresString = $("#genres").val();
// 	console.log(genresString);
// };

// var genresString = $('#test').val();
// 	console.log(genresString);





	// var baseURL = "https://api.themoviedb.org/3/discover/movie?vote_average.lte=3&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_count.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f"

	// var genresURL = $.extend("https://api.themoviedb.org/3/discover/movie?vote_average.lte=3&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_count.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f" + genresString);

	// $.ajax(genresURL).done(function(response) {
	// 	console.log(response);


// "backup URL": "https://api.themoviedb.org/3/discover/movie?with_genres=28&vote_average.lte=3&vote_count.gte=10&page=1&include_video=false&include_adult=true&sort_by=vote_count.asc&language=en-US&api_key=9961a998f004227dea7c58371f36ef5f"

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