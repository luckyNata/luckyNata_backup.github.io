var dataObject = {};
function GoogleCallback(jqueryObj, data){
 dataObject = data;

   	var dataTmpl = $('#tmpl').html();
	var tmpl = _.template(dataTmpl);
	var info=[];
	
	for (var i=0; i<dataObject.results.length; i++){
		
		info[i] = {
		title:''+dataObject.results[i].title+'',
		content: ''+dataObject.results[i].content+'',
		url: ''+dataObject.results[i].url+'',
		}
		//console.log(info[i]);
	}
	var insert = tmpl({dat:info});
	$('.wrapper').append(insert);
}

$(function(){
	$('#form').on('submit', function(e){
		var request = $('.input').val();
		$('.center').removeClass('center').addClass('left');

		$.ajax({
   			url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=8&q='+ request +'&callback=GoogleCallback&context=?',
  			dataType: 'jsonp',
			method: 'POST',
			//success: ,
  		});		
  	e.preventDefault();
});

//-------------Объекты и прототипное наследование ------------------------

 function Human(name, gender){
 	this.name = name,
 	this.age = 30,
 	this.sex = gender,
 	this.height = 185,
 	this.weight = 80 
 }

 function Worker(title){
 	this.company = title,
 	this.salary = 2000;
 }
 Worker.prototype = new Human;
 
 Worker.prototype.toWork = function(){
	alert('Я работаю с 8:00 до 17:00');
 };
	
 function Student(place){
 	this.placeOfStuding = place,
 	this.scholarship = 100
 }
Student.prototype = new Human;

Student.prototype.watchSeries = function(seriesName){
	alert('Я смотрю мой любимый сериал '+seriesName+'');
};
	
	var Alex = new Worker("Google");
	var Kate = new Student("KPI");

 // console.log(Kate.placeOfStuding);
 // console.log(Kate.age);
 // console.log(Kate.watchSeries("Friends"));

		console.log(Human);
		console.log(Alex);
		console.log(Kate);
});

