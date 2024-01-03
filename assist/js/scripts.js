jQuery(document).ready(function(){

	jQuery(".navbar ul li a").click(function(){
    jQuery(".navbar ul li a").removeClass("active");
    jQuery(this).addClass("active");
  })
  jQuery(".navbar ul li a").click(function(){
    jQuery(".navbar ul li a span").toggleClass("active-rect");
  })
























})