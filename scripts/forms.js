$('.js-unoccupied-toggle').click(function() {
	$('.js-unoccupied').toggleClass('show');
	});
	
$('.js-occupants-toggle').click(function() {
	$('.js-occupants').toggleClass('show');
	});
	
$('.js-sameaddress-toggle').click(function() {
	$('.js-sameaddress').toggleClass('show');
	});
	
$('.js-previous-owner-toggle').click(function() {
	$('.js-previous-owner').toggleClass('show');
	});
	
$('.js-in-out-toggle').click(function() {
	$('.js-in').toggleClass('show');
	$('.js-out').toggleClass('show');
	});
	
$(".js-occupants-toggle").change(function() {          
    $('.js-occupants').toggleClass('show');
	});

$('.js-compare-toggle').click(function() {
	$('.js-compare').toggleClass('show');
	});