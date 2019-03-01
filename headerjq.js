<script> 
jQuery(window).scroll(function (event) {
  var y = jQuery(this).scrollTop(); //set position from top in pixels
  if (y >= 10) {
	jQuery('#main-header').css({'height' : '95px', 'background' : 'linear-gradient(128deg, rgba(244,86,94,1) 23%, rgba(241,88,74,1) 59%, rgba(238,89,54,1) 98%)'});
	jQuery('#logo').css('height','56px');
	jQuery('.logo_container').css('top', '-8px');
	jQuery('#et-secondary-menu').css('top','42px');
	  jQuery('.mega-menu-wrap').css({'top' : '-78px', 'left' : '23%'});
  } else {
	jQuery('#main-header').css({'height' : '162px', 'background' : 'transparent'});
	jQuery('#logo').css('height', '100%');
	jQuery('.logo_container').css('top', '10px');
	  jQuery('.mega-menu-wrap').css({'top' : '10px', 'left' : '0'});
  }
});
</script>