// JavaScript Document

$(document).ready(function(){
  var startPos = 0;
  $(window).scroll(function(){
	var currentPos = $(this).scrollTop();
	if (currentPos > startPos) {
	  if($(window).scrollTop() >= 300) {
		$("#cg-header").css("position", "fixed");
		$("#cg-header").css("top", "-100px");
		$('.global-navi01').css('display','none');
		$('.global-navi02').css('display','none');
		$('.global-navi04').css('display','none');
		$('#search-bar').css('display','none');
		 }
	} else if (currentPos < 130) {
	  $("#cg-header").css({
	  	"position": "relative",
	  	"width": "100%",
	  	"top": "0px"
	  });
	  $(".global-navi01").css("top", 98 + "px");	  
	  $(".global-navi02").css("top", 98 + "px");	  
	  $(".global-navi04").css("top", 98 + "px");
	    
	} else {
	  $("#cg-header").css("top", 0 + "px");
	  $(".global-navi01").css("position", "fixed");
	  $(".global-navi01").css("top", 98 + "px");
	  $(".global-navi02").css("position", "fixed");
	  $(".global-navi02").css("top", 98 + "px");
	  $(".global-navi04").css("position", "fixed");
	  $(".global-navi04").css("top", 98 + "px");  
	}
	startPos = currentPos;
  });

// /* PCの検索バーの動き*/
	$('#search-bar').css('height','0');
	$('#btn-search').click(function(){
	  $('#search-bar').css('height','80px');
	});
	$('#search-x').click(function(){
	  $('#search-bar').css('height','0px');
	});

// /* PCの現在時表示の動き*/

	var navpos01 = $('#nav01 span').position().left;
	var navpos02 = $('#nav02 span').position().left;
	var navpos03 = $('#nav03 span').position().left;
	var navpos04 = $('#nav04 span').position().left;
	var navw01 = $('#nav01 span').width();
	var navw02 = $('#nav02 span').width();
	var navw03 = $('#nav03 span').width();
	var navw04 = $('#nav04 span').width();
	
	function posiset () {
	$('.home .ctg-point').css('left', '0px');
	$('.home .ctg-point').css('width', '0px');
	$('.vision .ctg-point').css('left', navpos01 + 'px');
	$('.vision .ctg-point').css('width', navw01 + 'px');
	$('.ourbusiness .ctg-point').css('left', navpos02 + 'px');
	$('.ourbusiness .ctg-point').css('width', navw02 + 'px');
	$('.newsroom .ctg-point').css('left', navpos03 + 'px');
	$('.newsroom .ctg-point').css('width', navw03 + 'px');
	$('.aboutus .ctg-point').css('left', navpos04 + 'px');
	$('.aboutus .ctg-point').css('width', navw04 + 'px');
	}	
	$(function(){
		posiset();
	});
  
	$('#nav01').hover(function(){
		$('.ctg-point').css('left', navpos01 + 'px');
		$('.ctg-point').css('width', navw01 + 'px');
	  },
	  function () {
		posiset();
	});
	$('#nav02').hover(function(){
		$('.ctg-point').css('left', navpos02 + 'px');
		$('.ctg-point').css('width', navw02 + 'px');
	  },
	  function () {
		posiset();
	});
	$('#nav03').hover(function(){
		$('.ctg-point').css('left', navpos03 + 'px');
		$('.ctg-point').css('width', navw03 + 'px');
	  },
	  function () {
		posiset();
	});
	$('#nav04').hover(function(){
		$('.ctg-point').css('left', navpos04 + 'px');
		$('.ctg-point').css('width', navw04 + 'px');
	  },
	  function () {
		posiset();
	});

  $('.global-navi01').css('display','none');
  $('.global-navi02').css('display','none');
  $('.global-navi04').css('display','none');
  $('#nav01').click(function(){
	  $('.global-navi01').css('display','block');
	  $('.global-navi02').css('display','none');
	  $('.global-navi04').css('display','none');
  });
  $('#nav02').click(function(){
	  $('.global-navi01').css('display','none');
	  $('.global-navi02').css('display','block');
	  $('.global-navi04').css('display','none');
  });
  $('#nav03').click(function(){
	  $('.global-navi01').css('display','none');
	  $('.global-navi02').css('display','none');
	  $('.global-navi04').css('display','none');
  });
  $('#nav04').click(function(){
	  $('.global-navi01').css('display','none');
	  $('.global-navi02').css('display','none');
	  $('.global-navi04').css('display','block');
  });
  $('.global-navi01').hover(function() {
		$(this).css('display','block');
		$(".navbar").css("top", 0 + "px");
		$('.ctg-point').css('left', navpos01 + 'px');
		$('.ctg-point').css('width', navw01 + 'px');
	},
    function(){ $(this).css('display','none');
	posiset();
	});
  $('.global-navi02').hover(function() {
		$(this).css('display','block');
		$(".navbar").css("top", 0 + "px");
		$('.ctg-point').css('left', navpos02 + 'px');
		$('.ctg-point').css('width', navw02 + 'px');
	},
    function(){ 
		$(this).css('display','none');
		posiset();
	});
  $('.global-navi04').hover(function() {
		$(this).css('display','block');
		$(".navbar").css("top", 0 + "px");
		$('.ctg-point').css('left', navpos04 + 'px');
		$('.ctg-point').css('width', navw04 + 'px');
	},
    function(){ 
		$(this).css('display','none');
		posiset();
	});
	$( '.cg-top a' ).click( function(){
		$( 'body' ).animate( {scrollTop:0} , 'slow' ) ;
		return false;
	});	
});