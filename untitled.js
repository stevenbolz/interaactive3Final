/*-------------------------------------
| Pinned Navigation
-------------------------------------*/
var pin_state = 'scroll';

var nav_height = 70;
var main_offset = $('#main').offset().top;
var nav_offset = main_offset - nav_height;


function pinned_nav() {
	// how far scrolled from top
	var howFar = $(window).scrollTop();

	// console.log('Nav Offset:' + nav_offset);
	// console.log('Dist Scrolled:' + howFar);

	if (howFar >= nav_offset)
	{
		pin_state = 'pinned';
		$('body').addClass('pinned');
	}
	else
	{
		pin_state = 'scrolled';
		$('body').removeClass('pinned');
	}
}


$(window).scroll(pinned_nav);

/*-------------------------------------
| Animated Scroll
-------------------------------------*/
function animate_scroll(event) {
	event.preventDefault(); //thanks we will take it from here.

	// determine section
	var whichSect = $(this).attr('href');

	// get offset of our destination
	var scroll_destination = $(whichSect).offset().top - nav_height;

	// scroll window. have to use html and body for widest browser reach
	$('html, body').animate({scrollTop : scroll_destination}, 1000);
}

$('#mainmenu a').click(animate_scroll);

//LIGHTBOX//

function light_on() {
	var newSrc = $(this).find('img').attr('src');
	 $('#dark img').attr('src' , newSrc);

// get origional image side
	var liinboImg = new Image();
	liinboImg.src = newSrc;

	$(liinboImg).load(function(){

	new_w = liinboImg.width;
	new_h = liinboImg.height;


	$('#light').css({'width':new_w,'height':new_h});


	
//turn on the light box
	 $('#dark').show();
	}); //here ends the image load into memory

}

function light_off() {
	//turn off the lightboxS
	$('#dark').hide();
}

$('#gallery .item').click(light_on);
$('#dark .close').click(light_off);
$('#dark').click(light_off);
