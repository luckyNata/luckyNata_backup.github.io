$(function(){
	$('.email__button').on('click', showModal);

	function showModal(){
		var email = $('.email__your').val();
		var jsonData = '{ \"email\" : \"'+email+'\" }';
		var modal = $('<div></div>');
		modal.text(jsonData);
		var footer = $('.footer');
		modal.addClass('modal');
		footer.append(modal);
	}
	
	$(document).mouseup(function (e){ // событие клика по веб-документу
    	var modal = $(".modal"); 
    
    	if (!modal.is(e.target)&& modal.has(e.target).length === 0) { 
      		modal.remove(); // скрываем модальное окно
    	}
 	});
});