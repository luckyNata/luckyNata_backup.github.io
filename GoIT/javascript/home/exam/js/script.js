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
    url: 'http://api.pixplorer.co.uk/image?word=animals&amount=7&size=s',
    dataType: 'json',
    success: function (data){
        var imgHtml = $('#images-list').html();
        console.log(data);
        var contentImg = tmpl(imgHtml, {data:data});
        $('.images').append(contentImg);
    }
  });


$(function(){
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   
 
    $('.grid').isotope({//инициализация изотопа
       itemSelector: '.grid-item',
       columnWidth: '.grid-item',
       gutter: 10
    });
});

