var partners = {
    '1': {
        'photo': 'img/partner1.png',
        'name':  'Bradley Hunter',
        'hobby': 'Based in Chicago. I love playing tennis and loud music.'
        },
    '2': {
        'photo': 'img/partner2.png',
        'name':  'Lucas Marsha',
        'hobby': 'I get my inspiration from nature and objects around me. I have a passion to colours, typography and skateboards.'
        },
    '3':{
        'photo': 'img/partner3.png',
        'name':  'Heather Walker',
        'hobby': 'I\'m a happy person that loves cats and climbing on mountains.'
        },
    '4':{
        'photo': 'img/partner4.png',
        'name':  'Bradley Hunter',
        'hobby': 'Based in Chicago. I love playing tennis and loud music.'
        },
}


  $.ajax({
    type: 'GET',
    url: 'http://api.pixplorer.co.uk/image?word=sport&amount=7&size=m',
    dataType: 'json',
    success: function (data){
        for(var i=0; i<data.images.length; i++){
        $('.grid-item'+i).css({"background-image":"url("+data.images[i].imageurl+")","background-size":"cover"});
        }
    }//success
  });//ajax

$(function(){
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   
 
    $('.grid').isotope({//инициализация изотопа
       itemSelector: '.grid-item',
       columnWidth: '.grid-item',
       gutter: 10
    });
  

 });//f-n ready