$(function(){
	console.log('hello');
	$('.leftMenu a').on('click', addTitle);
	
	function addTitle(e){
		e.preventDefault();
		var $title = e.target.text;
		var $arr=$title.split(' ');
		var $fullTitle = $arr[0].toUpperCase()+' номер для '+$arr[1]+' '+$arr[2];
		console.log($arr);
		$('.roomTitle').empty();
		$('.roomTitle').text($fullTitle);
	}

	$('.callback').on('click', showModal);
	$('.callback2').on('click', showModal);

	function showModal(e){
		e.preventDefault();
		var modal = $('<div class="modal"><form method="POST" action=""><div class="wrapperForm"><div class="formTitle">или Оставьте заявку, <span>мы свяжемся с Вами</span></div><div class="inputName"><input type="text" name="name"></div><div class="inputPhone"><input type="text" name="phone"></div><input type="submit" value="Отправить" class="submit submitModified"></form></div>');
      	var placeForModal = $('.mainCenter');
      	//console.log(modal);
            placeForModal.append(modal); // формируем модальное окно
	}//showModal

		$(document).mouseup(function (e){ // событие клика по веб-документу
    	var div = $(".modal"); 

    
    	if (!div.is(e.target)&& div.has(e.target).length === 0) { 
      		div.remove(); // скрываем модальное окно
    	}
 		});

 	$('.smallPic').on('click', showBigPicture);

 	function showBigPicture(){
 		var $url = $(this).attr('src');
 		var $arrUrl = $url.split('.');
 		var $newUrl = $arrUrl[0] + '_big'+'.jpg';
 		//console.log($newUrl);
 		$('.bigImagePlace').attr('src', $newUrl);
 		 
 	}
 	$('.bigImagePlace').on('click', scrollBigPicture);

 	function scrollBigPicture(e){
 		var pageCoords = "( " + e.pageX + ", " + e.pageY + " )";
 		console.log(pageCoords);
 		if (e.pageX > 1380){
 			var $url = $(this).attr('src');
 			console.log($url);
 			// var $arrUrl = $url.split('.');
 			// var $newUrl = $arrUrl[0] + '_big'+'.jpg';
 		//console.log($newUrl);
 		//$('.bigImagePlace').attr('src', $newUrl);
 		} else {
 			console.log('hello');
 		}

 	}
});