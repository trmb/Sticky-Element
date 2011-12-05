(function($) {
    // Small jQuery plug-in that attaches a class to specified elements as they are scrolled past. 
    // .sticky {position: fixed; z-index: 5000; top:0;}
	$.fn.stickyElement = function(options) {
	    options = $.extend({
			className: 'sticky'
	    }, options);
		
		$(this).each(function() {
			var elem = $(this);
			var origTop = elem.offset().top;
			
			$(window).scroll(function(e) {
				if ($(this).scrollTop() > origTop) {
					elem.addClass(options.className);
				} else if ($(this).scrollTop() <= origTop) {
					elem.removeClass(options.className);
				}
			});
		});	
	};
})(jQuery);


// Example usage:
$(document).ready(function() {
    $(elem).stickyElement();
});