
var dataObject = {};
var numberLinks=10; // количество линков
 	
 	var ajax = function(k){
 		var request = $('.input').val();
		var url = 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=4&start=' + k*4 + '&q='+ request +'&callback=GoogleCallback&context=?';
 		
 		$('.center').removeClass('center').addClass('left');
 		
 			$.ajax({ 		
   			url: url,
  			dataType: 'jsonp',
			method: 'GET',
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

 	$('#form').submit( function(event){
 		//var className = $('.wrapper div').attr('class');
 		var request = $('.input').val();
		if (request==""){
			location.reload();
		} else {
			event.preventDefault();
			ajax(0);
		  }
 	});

});



