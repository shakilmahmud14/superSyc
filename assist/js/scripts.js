jQuery(document).ready(function(){

	jQuery(".navbar ul li a").click(function(){
    jQuery(".navbar ul li a").removeClass("active");
    jQuery(this).addClass("active");
  })
  jQuery(".navbar ul li a").click(function(){
    jQuery("ul li span").addClass("active-rect");
  })


  jQuery(".list-item ul li a").click(function(){
      jQuery(".list-item ul li a").removeClass("active");
      jQuery(this).addClass("active");
    })


  jQuery(".delete").click(function(){
    jQuery(this).parent(".data-base").addClass("data-base-delete");
  })



















})