//= vendors/template.js
//= vendors/isotope.js
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

$(function(){
  $.support.cors = true;//поддержка ajax для IE
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   
    
    function ajaxRequest(word){
      $.ajax({
        type: 'GET',
        url: 'http://api.pixplorer.co.uk/image?word='+word+'&amount=7&size=m',
        dataType: 'json',
        cache: false,
    
        success: function (data){   
            console.log(data);
            var img_tmpl = $('#images-list').html();
            var img_content = tmpl(img_tmpl, {data: data});
            $('.grid').remove();
            $('.images').append(img_content); 
    
            $('.grid').isotope({
                 // options
                 itemSelector: '.grid-item',
                 layoutMode: 'fitRows'
            }); 

             $('.modal').hide();

                $('.grid-item').on('click', showModal);

                 function showModal(e){
                    var targIndex = $(this).index();
                    var modalURL = data.images[targIndex].imageurl;
                    console.log(modalURL);
                   
                    $('.modal-image').attr('src', modalURL);
                    $('.modal').show();
                }
            }//success
      });//ajax
    }

    ajaxRequest("cats");
       
    $('.form-search').submit( function(event){
        event.preventDefault();
        var request = $('.form-interest__input').val();
        ajaxRequest(request);
    }); 

    $('.modal-image').on('click', hideModal);

    function hideModal(){
        $('.modal').hide();
    }
    
});