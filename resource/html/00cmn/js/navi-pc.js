// JavaScript Document
(function($){
  $(function(){
    var g_ = {
      v: {},
      u: {},
      fn: {}
    };
    var startPos = 0;
    var isHasSecondNavi = $("#secnd-navi").length > 0 ? true : false;

    // ************************************
    //
    // Utility
    //
    // ************************************
    // vendorPrefix
    g_.u.getVendorPrefix = function() {
      var vendorPrefix = null;

      var div = document.createElement( 'div' ),
        prefixes = [ 'Webkit', 'Moz', 'ms', 'O' ];

      if ( 'transform' in div.style ) {
        vendorPrefix = '';
        return vendorPrefix;
      }

      for ( var i = 0; i < prefixes.length; i++ ) {
        if ( ( prefixes[ i ] + 'Transform' ) in div.style ) {
          vendorPrefix = '-' + prefixes[ i ].toLowerCase() + '-';
          break;
        }
      }

      return vendorPrefix;
    };

    // ************************************
    //
    // functions
    //
    // ************************************

    // ------------
    // langbar 言語切り替えバー
    // ------------
    g_.fn.langbar = {
      show: function(){
        g_.fn.searchbar.hide();
        $("#btn-language").addClass("active");
        $("#lang-chng").height(50);
      },
      hide: function(){
        $("#btn-language").removeClass("active");
        $("#lang-chng").height(0);
      },
      event: function(){
        var self = this;
        $("#btn-language").on("click", function(){
          if( $(this).hasClass("active") ){
            self.hide();
          } else {
            self.show();
          }
        });
      },
      initialize: function(){
        var langChngCss = {
          // "display": "block",
          // "height": "0px",
        };
        // langChngCss[g_.v.vendorPrefix+'transition'] = "1s";
        // $('#lang-chng').css(langChngCss);
        this.event();
      },
    };

    // ------------
    // searchbar
    // ------------
    g_.fn.searchbar = {
      show: function(){
        g_.fn.langbar.hide();
        $('#search-bar').css({
          'height':'60px',
          "display": "block"
        });
        $('#btn-search').addClass("active");
      },
      hide: function(){
        $('#search-bar').css({
          'height':'0px',
          "display": "block"
        });
        $('#btn-search').removeClass("active");
      },
      event: function(){
        var self = this;
        $('#btn-search').click(function(){
          if( $(this).hasClass("active") ){
            self.hide();
          } else {
            self.show();
          }

        });
        $('#search-x').click(function(){
          self.hide();
        });
      },
      initialize: function(){
      	$('#search-bar').css('height','0');
        this.event();
      },
    };

    // ************************************
    //
    // Initialize
    //
    // ************************************
    g_.v.vendorPrefix = g_.u.getVendorPrefix();
    for (var fnKey in g_.fn) {
      if (g_.fn.hasOwnProperty(fnKey) && g_.fn[fnKey].hasOwnProperty('initialize')) {
        g_.fn[fnKey].initialize();
      }
    }




    $(window).scroll(function(){
    	var currentPos = $(this).scrollTop();

      if (currentPos > startPos) {
    	  if($(window).scrollTop() >= 300) {
    			$("#header").css("position", "fixed");
    			$("#header").css("top", "-100px");
    			$('.global-navi01').css('display','none');
    			$('.global-navi02').css('display','none');
    			$('.global-navi03').css('display','none');
    			$('.global-navi04').css('display','none');
    			$('#search-bar').css({
    				"position": "fixed",
    				"display": "none",
    				'height': '0px'
    			});
    			// #secnd-navi
    			if( isHasSecondNavi ){
    				$("body").removeClass("show-secnd-navi");
    				$("body").addClass("hide-secnd-navi");
    			}
    		}
    	} else if (currentPos < 130) {
    	  $("#header").css({
    	  	"position": "relative",
    	  	"width": "100%",
    	  	"top": "0px"
    	  });
    	  // $("#header").css("position", "relative");
    	  // $("#header").css("width", "100%");
    	  $(".global-navi01").css("top", 98 + "px");
    	  $(".global-navi02").css("top", 98 + "px");
    	  $(".global-navi03").css("top", 98 + "px");
    	  $(".global-navi04").css("top", 98 + "px");
    		$('#search-bar').css({
    	  	"position": "absolute",
    			"display": "block",
    			'height': '0px'
    		});
    		// #secnd-navi
    		if( isHasSecondNavi ){
    			$("body").removeClass("show-secnd-navi");
    			$("body").removeClass("hide-secnd-navi");
    		}

    	} else {
    	  $("#header").css("top", 0 + "px");
    	  $(".global-navi01").css("position", "fixed");
    	  $(".global-navi01").css("top", 98 + "px");
    	  $(".global-navi02").css("position", "fixed");
    	  $(".global-navi02").css("top", 98 + "px");
    	  $(".global-navi03").css("position", "fixed");
    	  $(".global-navi03").css("top", 98 + "px");
    	  $(".global-navi04").css("position", "fixed");
    	  $(".global-navi04").css("top", 98 + "px");
    		$('#search-bar').css({
    			"position": "fixed",
    			"display": "block",
    			'height': '0px'
    		});
    		// #secnd-navi
    		if( isHasSecondNavi ){
    			$("body").removeClass("hide-secnd-navi");
    			$("body").addClass("show-secnd-navi");
    		}
    	}
    	startPos = currentPos;
    });





    /* 言語移動*/
    nowurl = location.pathname;
    ichi = nowurl.substring(3) ;
    $('#btn-en').click(function(){
    	langen = "/en";
    	location.href = langen+ichi;
    });
    $('#btn-ja').click(function(){
    	langja = "/ja";
    	location.href = langja+ichi;
    });
    $('#btn-zh').click(function(){
    	langja = "/zh";
    	location.href = langja+ichi;
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
      $('.global-navi03').css('display','none');
      $('.global-navi04').css('display','none');
      $('#nav01').click(function(){
    	  $('.global-navi01').css('display','block');
    	  $('.global-navi02').css('display','none');
    	  $('.global-navi03').css('display','none');
    	  $('.global-navi04').css('display','none');
        g_.fn.langbar.hide();
      });
      $('#nav02').click(function(){
    	  $('.global-navi01').css('display','none');
    	  $('.global-navi02').css('display','block');
    	  $('.global-navi03').css('display','none');
    	  $('.global-navi04').css('display','none');
        g_.fn.langbar.hide();
      });
      $('#nav03').click(function(){
    	  $('.global-navi01').css('display','none');
    	  $('.global-navi02').css('display','none');
    	  $('.global-navi03').css('display','block');
    	  $('.global-navi04').css('display','none');
        g_.fn.langbar.hide();
      });
      $('#nav04').click(function(){
    	  $('.global-navi01').css('display','none');
    	  $('.global-navi02').css('display','none');
    	  $('.global-navi03').css('display','none');
    	  $('.global-navi04').css('display','block');
        g_.fn.langbar.hide();
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
      $('.global-navi03').hover(function() {
    		$(this).css('display','block');
    		$(".navbar").css("top", 0 + "px");
    		$('.ctg-point').css('left', navpos03 + 'px');
    		$('.ctg-point').css('width', navw03 + 'px');
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




  });
})(jQuery);
