
jQuery(document).ready(function($) {
  "use strict";

  // Display the copyright in the footer
	$(".footer-copyright").html("© 2016 "+"<a href='http://genesis-paedeia.org/' target='_blank'>"+"www.genesis-paedeia.org</a> - "
		+"<a href='http://www.hyphensa.com/site/index.php/en/' target='_blank' >hyphen SA</a>");

  // Create back-to-top button
  var top = "<a href='#' class='back-to-top' style='display: inline;'><i class='fa fa-arrow-circle-up'></i></a>";
  $(".footer-copyright").append(top);

  // Back-to-top button scroll
  var offset = 250;
  var duration = 300;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });

  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  });

  // Blog title added href
  var link = "<a href='http://localhost/genesis-paedeia/blog' target='_blank' style='display: inline;text-decoration:none;'>Blog</a>"
  jQuery('.blog-section').find('.widget-title').html(link);

  // resize event of the window object
  jQuery(window).load(function() {
    // window size .post-header
    var screenheight = $(window).height();
    jQuery('.post-header-container').height(screenheight);

    // scroll down icon
    var down = "<div class='arrow-down'><a href='#three' class=''><i class='fa fa-chevron-down'></i></a></div>";
    jQuery('.post-header-title').append(down);
  });


});
