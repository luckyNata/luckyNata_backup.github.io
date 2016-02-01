function GoogleCallback(jqueryObj, data){
 console.log('data', data);
 console.log(data.results[1].title);
}
$(function(){

  $.ajax({
   url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ 'test' +'&callback=GoogleCallback&context=?',
   dataType: 'jsonp',
   method: 'GET',
   success: function(){
   	alert('hello');
   },
   error: function(){
   	 	alert('bad request');
  },
 });

  	var dataTmpl = $('#tmpl').html();
	var tmpl = _.template(dataTmpl);
	//var titleN=data.results[1].title;
	var info = {
		title: "Название",
		description: 'Очень интересная статья',
		url: 'test.com.ua',
	}

	var insert = tmpl(info);
	$('.wrapper').append(insert);

});