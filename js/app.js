$(function() {

	/** This toggle navigation helps move relevant content up to the top
	 of the page on an initial page load, so the page's content takes
	 priority and the user doesn't have to scroll through navigation
	 items. In a desktop view, the navigation returns to being fully visible
	 and accessible. **/

	/******************************************
	/* TOGGLE NAVIGATION USING JQUERY
	/*******************************************/
	// jQuery click event handler for the menu button (the one inside 
	// the header element).
	$('#menu').click(function() { 
		// Add (or remove) the .is-expanded CSS class on the 'nav' 
		// navigation element when the menu button is clicked.
		$('nav').toggleClass('is-expanded'); 
	});

	


});