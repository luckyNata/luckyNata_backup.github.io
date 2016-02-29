$(function(){
	$('form').on('submit', showModal);

	function showModal(e){
		e.preventDefault();

		var str = $(this).serialize();
		var jsonData = JSON.stringify(str);
	
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