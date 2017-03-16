$(document).ready(function(){


	$(window).scroll(function() {
		if($(this).scrollTop() > 30) {
			$(".navbar").fadeOut(3000);
		}
		else {
			$(".navbar").fadeIn();
		}
	});


	// if (document.getElementById) { window.onload = swap };
	// 	function swap() {
	// 	var numimages=2;
	// 	rndimg = new Array("bg/walterwhite.jpg", "bg/HoC.jpg");
	// 	x=(Math.floor(Math.random()*numimages));
	// 	randomimage=(rndimg[x]);
	// 	document.getElementById(".body").style.backgroundImage = "url("+ randomimage +")";
	// }
  // $(function(){
  //   var includes = $('[data-include]');
  //   jQuery.each(includes, function(){
  //     var file = $(this).data('include') + '.html';
  //     $(this).load(file);
  //   });
  // });


});



