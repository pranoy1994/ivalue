function pBarScrollAnimation(elem){
    var $elem = $(elem);
    var $window = $(window);

    var screenvTop = $window.scrollTop();
    var screenvBottom = screenvTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= screenvBottom) && (elemTop >= screenvTop));
}

var eProgressBar = function ($) {
    return {
        init: function () {
        	var counting_id = 0;
        	$('.e-p-bar').each(function(){
        		counting_id++;
        		// build progress bar class selector with running id number
        		var this_id = $(this).attr('data-id', counting_id);
        		var this_bar = '.e-p-bar[data-id="'+counting_id+'"]';
        		// build progress bar object key
        		var progressbar_data = $(this).data('progress-bar-style');
				progressbar_data = progressbar_data.toLowerCase().replace(/\b[a-z]/g, function(letter) {
				    return letter.toUpperCase();
				});
				// grab options
				var bar_color = $(this).css('border-color'); // color	
				var stroke_width = $(this).data('stroke-width'); // stroke width
				var bar_duration = $(this).data('duration'); // duration
				var trail_width = $(this).data('trail-width'); // trail width
				var trail_color = $(this).data('trail-color'); // trail color
				var bar_progress = $(this).data('progress-percent'); // progress value
				var font_color = $(this).css('color'); // progress font color
				// set default data if options is null / undefinded
				if (bar_color == 'rgb(169, 68, 66)'){ bar_color = '#d2a033'; }
				if (trail_color == ''){ trail_color = '#fff'; }
				if (trail_width == ''){ trail_width = '0'; }
				if (bar_progress == ""){ bar_progress = '1'; }
				if (stroke_width == ""){ stroke_width = '3'; }
				if (bar_duration == ""){ bar_duration = '1500'; }
	         	// set progress bar
	         	var bar = new ProgressBar[progressbar_data](this_bar, {
		            strokeWidth: stroke_width,
		            duration: bar_duration,
		            color: bar_color,
		            trailWidth: trail_width,
		            trailColor: trail_color,
		            svgStyle: null,		            
	            	step: function (state, bar) {
						bar.setText(Math.round(bar.value() * 100) + '%');
					},									   
					text: {
						style: {
							color: font_color,
						}
					},
		        });
	         	// init animation when progress bar in view without scroll
	         	var check_scroll = pBarScrollAnimation(this_bar);
			    if (check_scroll == true){
		        	bar.animate(bar_progress); 
		        }
		        // start progress bar animation upon scroll view
		        $(window).scroll(function (event) {
				    var check_scroll = pBarScrollAnimation(this_bar);
				    if (check_scroll == true){
			        	bar.animate(bar_progress);
			        }
				});
        	});   
        }
    }
}(jQuery);

$(document).ready(function () {
	eProgressBar.init();
});