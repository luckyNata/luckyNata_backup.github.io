var dataObject = {};
function GoogleCallback(jqueryObj, data){
 console.log('data', data);
 console.log(data.results[1].title);
 dataObject = data;
 console.log(dataObject.results.length);

   		var dataTmpl = $('#tmpl').html();
		var tmpl = _.template(dataTmpl);
		var info=[];
	for (var i=0; i<dataObject.results.length; i++){
		
		info[i] = {
		title:''+dataObject.results[i].title+'',
		content: ''+dataObject.results[i].content+'',
		url: ''+dataObject.results[i].url+'',
		}
		console.log(info[i]);
	}
		var insert = tmpl({dat:info});
		$('.wrapper').append(insert);
}

$(function(){
//	$('.button').on('click', start);

		$.ajax({
   			url:'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q='+ 'test' +'&callback=GoogleCallback&context=?',
  			dataType: 'jsonp',
			method: 'POST',
			//success: loadData,
  		});		

});

