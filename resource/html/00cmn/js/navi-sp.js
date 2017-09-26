// JavaScript Document
(function($){
  $(function(){
		var g_ = {
      v: {},
      u: {},
      fn: {}
    };

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
    // nav
    // ------------
    g_.fn.nav = {
			initialize: function(){
				// g_.fn.header.show();
				// g_.v.$header.css({
				// 	"position": "fixed",
				// 	"top": "0px"
				// });
      }
		};

		// ------------
    // header
    // ------------
    g_.fn.header = {
			show: function(isHeader){
				var isH = false || isHeader;
				if( isHeader !== true ){
						$("body").css({"padding-top": "60px"});
				}
				g_.v.$header.css({
					"position": "fixed",
					"top": "0px"
				});
			},
			hide: function(isHeader){
      	var isH = false || isHeader;
      	if(isH === true){
					g_.v.$header.css({
						"position": "fixed",
						"top": "-100px"
					});
      	}
      },
			event: function(){
				var startPos = 0;
			  $(window).scroll(function(){
					var currentPos = $(this).scrollTop();
					if( currentPos >= 0 ){
						$("#hOverlay").css({'display':'none'});
						if( currentPos > startPos ){ // topTobtm
							if( g_.v.isNavShow ){
								g_.fn.header.hide();
							} else {
								g_.fn.header.hide( true );
							}
						} else { // btmTotop
							if( currentPos < 1 ) {
								g_.fn.header.show( true );
							} else {
								g_.fn.header.show();
								g_.v.$smpNav.css({
									"position": "fixed",
									"top": 0 + "px"
								});
							}
						}
						startPos = currentPos;
					}
			  });
			},
			initialize: function(){
				this.event();
      }
		};

    // ------------
    // langbar 言語切り替えバー
    // ------------
    g_.fn.langbar = {
      show: function(){
				g_.v.$slideSpMenu.close();
        $("#btn-language").addClass("active");
        if( $("#btn-zh").is(':visible') ){
          $("#lang-chng").height(140);
        } else {
          $("#lang-chng").height(95);
        }
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
					return false;
        });
      },
      initialize: function(){
        // var langChngCss = {
        //   "display": "block",
        //   "height": "0px",
        // };
        // langChngCss[g_.v.vendorPrefix+'transition'] = "1s";
        // $('#lang-chng').css(langChngCss);
        this.event();
      }
    };

    // ************************************
    //
    // Initialize
    //
    // ************************************
		g_.v.isNavShow = false;
		g_.v.$header = $("#header");
		g_.v.$smpNav = $("#smp-navigation");
		g_.v.$slideSpMenu = $("#smp-navigationList").data( "mmenu" );
    g_.v.vendorPrefix = g_.u.getVendorPrefix();
    for (var fnKey in g_.fn) {
      if (g_.fn.hasOwnProperty(fnKey) && g_.fn[fnKey].hasOwnProperty('initialize')) {
        g_.fn[fnKey].initialize();
      }
    }


		$('#sp-foot-navi ul.sp-navi-list span').click(function() {
			$(this).next('ul.scnd-level').toggle();
			return false;
		});

	// /* 言語移動*/
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


	});
})(jQuery);
