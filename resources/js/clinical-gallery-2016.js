// JavaScript Document
///if($("video.video-js")){$.getScript("//players.brightcove.net/734546198001/S1crzIS_default/index.min.js");} // Load Brightcove JS for player.
$(document).ready(function(){
	$(".carousel").carousel({interval: 99999999}); // Pause auto-carousel.
  	$(".carousel-caption").hide(); // Hide captions over image/videos.
	$(".carousel").each(function(index,element){ // Set initial caption for each carousel.
		var initialCaption = $(element).find(".carousel-caption").first().html();
		$(element).parents(".row").find(".image-details").html(initialCaption);
	});
	$(".carousel").on("slide.bs.carousel",function(event){ // Update captions and pause with each slide.
		var currentCaption = $(event.relatedTarget).find(".carousel-caption").first().html();
		$(event.relatedTarget).parents(".row").find(".image-details").html(currentCaption);
		$("video").trigger("pause");
	});
	$(".carousel").on("slid.bs.carousel",function(event){ // Resume playback after slide.
		$(event.relatedTarget).parents(".row").find(".active video").trigger("play");
	});
	


	$('#mobile-tabs-dropdown').html($('#cat-tabs').html());
	
    var hashTabName = document.location.hash;
	var prefix = "tab-";
	
	$('#cat-tabs a').on('shown.bs.tab', function (e) {
		var nowTab = $(e.target).attr('href')
		$('#mobile-tabs-dropdown li').removeClass('active')
		$('#mobile-tabs-dropdown a[href="' + nowTab + '"]').parent().addClass('active')
				window.location.hash = e.target.hash.replace("#", "#" + prefix);
	});
	
	
	$('#mobile-tabs-dropdown a').on('shown.bs.tab', function (e) {
		var nowTab = $(e.target).attr('href')
		$('#cat-tabs li').removeClass('active')
		$('#cat-tabs a[href="' + nowTab + '"]').parent().addClass('active')
				window.location.hash = e.target.hash.replace("#", "#" + prefix);
	});
	
	
	
	
    if (hashTabName) {
		hashTabName = hashTabName.replace(prefix,"")
		$('#cat-tabs a').each(function(){
			if($(this).attr('href') == hashTabName){
				$(this).tab('show');
				var tabParent = $('#clinical-gallery-wrap');
				
				
				
				$(window).load(function() {
				var cgTop = $('#clinical-gallery-wrap').get(0).offsetTop;
				$('html, body').stop().animate({
					scrollTop: cgTop
				}, 1000);
				})
				
			}
		})
        $('#cat-tabs a[href="' + hashTabName + '"]').tab('show');
    }	
	
	

});

$(window).scroll(function(){
	var FadeOnScroll = $(this).scrollTop();
	
	var CGtop = $('#clinical-gallery-wrap').get(0).offsetTop;
	
	if (FadeOnScroll >= CGtop) { //when set px is reached 
		$('#clinical-nav').addClass('fixed'); //class is added to .navbar for desktop and tablet
	} else {
		$('#clinical-nav').removeClass('fixed');
	}
	/*
	if (FadeOnScroll >= CGtop) { //when set px is reached 
		$('#mobile-tabs-dropdown').addClass('remove-fixed'); //class is added to .navbar for mobile
	} else {
		$('#mobile-tabs-dropdown').removeClass('remove-fixed');
	}
	*/
});


/*$(window).on('activate.bs.scrollspy', function(e) {
  var $hash, $node;
  $hash = $("a[href^='#']", e.target).attr("href").replace(/^#/, '');
  $node = $('#' + $hash);
  if ($node.length) {
    $node.attr('id', '');
  }
  document.location.hash = $hash;
  if ($node.length) {
    return $node.attr('id', $hash);
  }
}); */