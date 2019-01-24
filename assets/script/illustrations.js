$(document).ready(function() {
	$(".img").hide();

 	$(".img").fadeIn(900);

	// const distanceToNextImage = -450;
	// let currentImageNumber = 0;

	// $("#lightbox").hide();
	// $("#overlay, #close").click(function() {
	// 	$("#lightbox").hide();
	// 	$("body").removeClass("noScroll");
	// })

  // $('.img').click(function() {
  // 	$('.carousel-strip').slick({
  // 		dots: true;
  // 		infinite: true;
  // 		speed: 300;
  // 		slidesToShow: 1;
  // 		adaptiveHeight: true;
  // 		centerMode: true;
  // 		variableWidth: true;
  	
  // })
  // })

  $('.carousel-strip').slick({
  		dots: true;
  		infinite: true;
  		speed: 300;
  		slidesToShow: 1;
  		adaptiveHeight: true;
  		centerMode: true;
  		variableWidth: true;
  	
  })
  $('.carousel-section').click(function() {
  	$('carousel-strip').css('display:block');
  })


 });




// 	$(".img").click(function() {
// 		currentImageNumber = parseInt($(this).attr("id"), 9);
// 		let newLeft = distanceToNextImage * currentImageNumber;
// 		$("#carousel-strip").css("left", newLeft);
// 		$("body").addClass("noScroll");
// 		$("#lightbox").show();
// 	});
	

// 	// Carousel section
// 	$("#right").click(function() {
// 		currentImageNumber = (currentImageNumber + 1) % 8;
// 		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

// 	});

// 	$("#left").click(function() {
// 		currentImageNumber = currentImageNumber == 0 ? 7 : (currentImageNumber - 1);
// 		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
// 	});

// 	// OTHER CODE
// 	// This closes the lightbox when you click on the overlay or the x.
// 	$("#overlay, #close").click(function() {
// 		$("#lightbox").hide();
// 		$("body").removeClass("noScroll");
// 	})
// });