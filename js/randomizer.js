//coding by Maarten Ronteltap
//api_key=9961a998f004227dea7c58371f36ef5f

$(document).ready(function() {
	$("#surprise").click(function() {
		var surpriseBaseUrl = "https://api.themoviedb.org/3/discover/movie?api_key=9961a998f004227dea7c58371f36ef5f&vote_average.gte=0.1&vote_average.lte=5";
		var page = "&page=";
		var randomPage = function() {
			return Math.floor((Math.random() * 1692) + 1);
		};
		page = page.concat(randomPage);
		var surpriseUrl = surpriseBaseUrl.concat(page);
		console.log(surpriseUrl);
		$.get(surpriseUrl, function(data){
			console.log(data);
			var movieBaseUrl = "https://www.themoviedb.org/movie/";
			var i = Math.floor(Math.random() * 20);
			var movieId = data.results[i].id;
			var movieUrl = movieBaseUrl.concat(movieId);
			var win = window.open(movieUrl, '_blank');
			if (win) {
				win.focus();
			} else {
				alert('Please allow popups for this website');
			};
		})
	}
})