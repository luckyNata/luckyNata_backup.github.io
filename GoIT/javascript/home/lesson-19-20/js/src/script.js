$(function(){
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