
var dataObject = {};
var numberLinks=10; // количество линков
 	
 	var ajax = function(k){
 		var request = $('.input').val();
		var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=4&start=' + k*4 + '&q='+ request +'&callback=GoogleCallback&context=?';
 		
 		$('.center').removeClass('center').addClass('left');
 		
 		$.ajax({ 		
   		url: url,
  		dataType: 'jsonp',
		method: 'POST',
		//success: ,
  		})
	};

	function GoogleCallback(jqueryObj, data){
	    $('.searchResults').remove();
        $('.link').remove();
 		dataObject = data;
 		//console.log(dataObject);

   		var dataTmpl = $('#tmpl').html();
		var tmpl = _.template(dataTmpl);
		var info=[];
	// numberLinks = dataObject.results.length/3;
	// numberLinks = Math.ceil(numberLinks);

		for (var i=0; i<dataObject.results.length; i++) {

			info[i] = {
				title:''+dataObject.results[i].title+'',
				content: ''+dataObject.results[i].content+'',
				url: ''+dataObject.results[i].url+'',
			}
		}

		var insert = tmpl({dat:info});
			$('.wrapper').append(insert);
	  	var $link = $('.link');
            $.each($link, function(i) {
                 	$link[i].addEventListener('click', function(e) {
                 		$('.searchResults').remove();
                 		$('.link').remove();
                     	e.preventDefault();
                        ajax(i);
                 	});
          	});
	}//GoogleCallback

$(function(){

 	$('#form').submit( function(){
		event.preventDefault();
		ajax(0);
 	});

});



;$(function(){
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