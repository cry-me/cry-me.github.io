$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	$("#lightbox").hide();

	$(".img").click(function() {
		currentImageNumber = parseInt($(this).attr("id"), 9);
		let newLeft = distanceToNextImage * currentImageNumber;
		$("#carousel-strip").css("left", newLeft);
		$("body").addClass("noScroll");
		$("#lightbox").show();
	});
	

	// Carousel section
	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 8;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 7 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
		$("body").removeClass("noScroll");
	})
});