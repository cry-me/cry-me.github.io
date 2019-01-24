$(document).ready(function() {
  $('.img-container').slick({
    dots: true;
    infinite: true;
    speed: 300;
    slidesToShow: 1;
    adaptiveHeight: true;
    centerMode: true;
    variableWidth: true;
  })

	jQuery.fn.shake = function() {
    this.each(function (i) {
        $(this).css({
            "position": "relative"
        });
        for (var x = 1; x <= 8; x++) {
            $(this).animate({
                right: -25;
            }, 10).animate({
                right: 0;
            }, 50).animate({
                right: 25;
            }, 10).animate({
                right: 0;
            }, 50);
        }
    });

	}

	var blink = 400;
	var t = setInterval(function () {
    var text = document.getElementById('animation');
    text.style.visibility = (text.style.visibility == 'hidden' ? '' : 'hidden');
	}, blink);

	$(".top-row, .bottom-row, #egg").hide();

	$(".top-row").fadeIn();
	$(".bottom-row, #egg").delay(500).fadeIn("slow");
 
	$("#egg").hover(function() {
		$("#egg").effect("shake");
	});
});