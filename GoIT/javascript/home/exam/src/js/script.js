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

function ajaxRequest(word){
  $.ajax({
    type: 'GET',
    url: 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=m',
    dataType: 'json',
    success: function (data){ 
    var img_tmpl = $('#images-list').html();
    console.log('----------', data);
    console.log('----------', img_tmpl);
    var img_content = tmpl(img_tmpl, {data: data});
    $('.grid').remove();
    $('.images').append(img_content); 

    $('.grid').isotope({
         // options
         itemSelector: '.grid-item',
         layoutMode: 'fitRows'
    });

    }//success
  });//ajax
}
    ajaxRequest("cats");

$(function(){
  $.support.cors = true;//поддержка ajax для IE
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   

    $('.form-search').submit( function(event){
        event.preventDefault();
        var request = $('.form-interest__input').val();
        ajaxRequest(request);
    });   
 });