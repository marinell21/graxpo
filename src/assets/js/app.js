//= ../../../bower_components/jquery/dist/jquery.min.js
//= ../../../bower_components/what-input/what-input.min.js
//= ../../../bower_components/foundation-sites/js/foundation.core.js
//= ../../../bower_components/foundation-sites/js/foundation.responsiveToggle.js
//= ../../../bower_components/foundation-sites/js/foundation.util.mediaQuery.js

//= slick.min.js
;(function($){
	$(function(){
		$(document).foundation();
		var $slider = $('.ba-slider');
		$slider.slick();
		$('.ba-slider-thumb').on('click', function(e){
			e.preventDefault();
			var $index = $(this).data('slide');
			$slider.slick('slickGoTo', $index-1);
		});
	})
	$(window).load(function(){
		var $mapDiv = $('#map')[0];
		if($('#map').length){
			var $map = new google.maps.Map($mapDiv, {
				center: {lat: 52.129450, lng: -106.668298},
				zoom: 14,
				scrollwheel: false
			});
			var $marker = new google.maps.Marker({
				position: {lat: 52.129450, lng: -106.668298},
				map: $map,
				icon: 'img/marker.png'
			});
		}
	})
})(jQuery);

