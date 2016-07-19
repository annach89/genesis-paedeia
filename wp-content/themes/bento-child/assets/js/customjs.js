
jQuery(document).ready(function($) {
  "use strict";

  // Display the copyright in the footer
	$(".footer-copyright").html("© 2016 "+"<a href='http://genesis-paedeia.org/' target='_blank'>"+"www.genesis-paedeia.org</a> - "
		+"<a href='http://www.hyphensa.com/site/index.php/en/' target='_blank' >hyphen SA</a>");


  // Create back-to-top button
  var html = "<a href='#' class='back-to-top' style='display: inline;'><i class='fa fa-arrow-circle-up'></i></a>";
  $(".footer-copyright").append(html);

  // back-to-top button scroll
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




});
