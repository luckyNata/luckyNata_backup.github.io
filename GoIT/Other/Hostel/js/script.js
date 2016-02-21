$(function(){
	console.log('hello');
	$('.leftMenu a').on('click', addTitle);
	
	function addTitle(event){
		event.preventDefault();
		var $title = event.target.text;
		var $arr=$title.split(' ');
		var $fullTitle = $arr[0].toUpperCase()+' номер для '+$arr[1]+' '+$arr[2];
		console.log($arr);
		$('.roomTitle').empty();
		$('.roomTitle').text($fullTitle);
	}

	$('.callback').on('click', showModal);

	function showModal(){
		var modal = $('<div class="modal">Форма обратной связи</div>');
      	var wrapper = $('.wrapper main');
      	console.log(modal);
            wrapper.append(modal); // формируем модальное окно


	$(document).mouseup(function (e){ // событие клика по веб-документу
    	var div = $(".modal"); 
    
    	if (!div.is(e.target)&& div.has(e.target).length === 0) { 
      		div.hide; // скрываем модальное окно
    	}
 	});
	}//showModal
});