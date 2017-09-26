// JavaScript Document

$(function(){
	
	countFile()
	
	
	$('body').on('click','#events-tab a',function(e){
		var _i = $('#events-tab a').index(this)
		setDocs(_i)
	})
	
	
})

function setDocs(_i){
	
	if(_i == 1){ //white paper
		$('.btnBox').each(function(){
			$(this).next().children('.row').hide().addClass('hid');
			$(this).next().children('.row.document').show().removeClass('hid');
		})
	}else if(_i==2){ //video
		$('.btnBox').each(function(){
			$(this).next().children('.row').hide().addClass('hid');
			$(this).next().children('.row.video').show().removeClass('hid');
		})
		
	}else{
		$('.btnBox').each(function(){
			$(this).next().children('.row').show().removeClass('hid');
		})
	}
	
	
	
	countFile()
	
}




function countFile(){
	$('.btnBox').each(function(){
		var _c = $(this).next().children('.row:not(.hid)').length;
		$(this).find('span.num').text(_c);
	})

}