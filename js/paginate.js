(function($) {
	
	// Function called customPaginate 
	// The user will able to pass in set of options that will override whatever will happen inside the pagination function
	$.fn.customPaginate = function(options){
		
		// Set paginationContainer variable
		var paginationContainer = this;
		var itemsToPaginate;


		// Define default settings
		// Whatever is passed in options will override default
		var defaults = {
			// Have an option for a user to set
			// How many items on a single a page?
			itemsPerPage : 7
		};

		// Store result in settings
		var settings = {};

		// Options will override what's in default and then that will also override what's in settings; since settings is an empty object it will always be given the result of this overriding situation here 
		$.extend(settings, defaults, options);

		var itemsPerPage = settings.itemsPerPage;

		// Holds items to paginate
		itemsToPaginate = $(settings.itemsToPaginate);
		// Ceil takes decimal numbers to the next maximum number, for example if you have 2.8 it will bump up to 3
		var numberOfPaginationLinks = Math.ceil((itemsToPaginate.length / itemsPerPage));

		// Inject an empty ul tag inside of the paginationContainer
		$("<ul></ul>").prependTo(paginationContainer);

		for(var index = 0; index < numberOfPaginationLinks; index++) {
			// Append li to ul tag 
			paginationContainer.find("ul").append("<li>"+ (index+1) + "</li>");
		}

		// By default we are only showing the first items per page in the element (i.e. show first 8 elements)
		// Any items that are greater than the 8th element, hide them
		itemsToPaginate.filter(":gt(" + (itemsPerPage - 1)  + ")").hide();

		paginationContainer.find("ul li").first().addClass(settings.activeClass).end().on('click', function() {
			
			var $this = $(this);

			$this.addClass(settings.activeClass);

			$this.siblings().removeClass(settings.activeClass);

				// Select link number
				var linkNumber = $this.text();

				// Select items to hide
				// All the ones that are less than the link number times items per page
				var itemsToHide = itemsToPaginate.filter(":lt(" + ((linkNumber-1) * itemsPerPage)  + ")");

				// Concatenate by taking two arrays and merge them together and store them in the first array
				$.merge(itemsToHide, itemsToPaginate.filter(":gt(" + ((linkNumber * itemsPerPage) - 1)  + ")"));
                    
                // For all the items we have to paginate, the ones that are not items to hide
                var itemsToShow = itemsToPaginate.not(itemsToHide);

                $("html,body").animate({scrollTop:"0px"}, function(){
                  // Items we want to hide
                  itemsToHide.hide();
                  // Items we want to show
                  itemsToShow.show();
                });
		});
	}
	
}(jQuery));