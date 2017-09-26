// JavaScript Document

$(function(){
	initCookieAlert();
})

function initCookieAlert(){
	$('#header-wrap #system-alert').hide();
		
	var data = $.cookie('tmsc-cookie');
	
	$('#header-wrap #system-alert').on('click', '.btn-primary', function() {
		
		$.cookie('tmsc-cookie','on',{expires:12,path:'/'});
		
		$('#header-wrap #system-alert').hide();
	});
	
	if(data != 'on') {
		$('#header-wrap #system-alert').show();
	}
}