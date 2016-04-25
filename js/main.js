$(function() {

    // Call pagination script
    $('.pagination').customPaginate({
        itemsToPaginate : ".post",
        activeClass : "active-class"
    });

    // Toggle navigation
    /* When you shrink the window size or on small screens, 
    a toggle menu button (hamburger) appears that, when, clicked,
    expands to a dropdown menu.*/
    $('.nav .navbar-nav a').on('click', function() {
        $('.navbar-toggle').click(); //bootstrap 3.x by Richard
    });
    
});
