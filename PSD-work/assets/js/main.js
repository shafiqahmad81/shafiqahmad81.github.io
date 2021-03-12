$(document).ready(function(){


	
	$('.slide-carosel').owlCarousel({
	    items:1,
	    dots:false,
	    loop:true,
	    nav:true,
	    navText:["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"]
	})

	$('.case-studies-carosel').owlCarousel({
	    items:3,
	    dots:true,
	    margin:30,
	    loop:true,

	})

	$('.tastimonial-carosel').owlCarousel({
	    items:1,
	    dots:true,
	    loop:true,
	    margin:30,
	    nav:false,
	    
	})

	$('.logo-carosel').owlCarousel({
	    items:6,
	    loop:true,
	    margin:30,
	    dots:false,
	    nav:false,
	    
	})
	
});



	

	
