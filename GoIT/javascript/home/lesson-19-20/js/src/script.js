$(function(){
	$('.accordion').on('click', showInfo);
	$('.imgBlock').on('click', showBig);
	$('.exit').on('click', closeBig);

	function showInfo(){
		$(this).toggleClass('accordion--click');
      	$(this).children('.accordion__sign').toggleClass('accordion__sign--click');
      	$(this).next().slideToggle(500);
      	$('.accordion').not(this).next().slideUp(500);
      	$('.accordion').not(this).removeClass('accordion--click');
      	$('.accordion').not(this).children('.accordion__sign').removeClass('accordion__sign--click');
	}

	function showBig(){
		var src = $(this).children('img').attr('src');
		var arr = src.split('/');
		var newSrc = 'img/ser_'+ arr[1];
		var img = $('.modal-content');
		console.log(newSrc);
		img.css({'backgroundImage': 'url('+newSrc+')', "background-size": "100% 100%"});
		$('.services__modal').show();
	}

	function closeBig(){
		$('.services__modal').hide();
	}


//------------------------ Lodash -----------------------------------------------------------
	var skills = [];
		skills = _.map(data, 'skills');//выбрали скиллы
		skills = _.flatten(skills);//склеили массив массивов
		skills = _.uniq(skills);//убрали повторения
		console.log(skills);

	var name = [];
		name = _.sortBy(data, 'friends');//отсортировали по количеству друзей
		name = _.map(name, 'name');//выбрали имена
		console.log(name);

	var friends = [];
		friends = _.map(data, 'friends');//выбрали friends --> массив массивов с объектом
		friends = _.flatten(friends); //склеили, получили массив объектов
		friends = _.map(friends, 'name') //выбрали имена друзей
		friends = _.uniq(friends);
		console.log(friends);
});