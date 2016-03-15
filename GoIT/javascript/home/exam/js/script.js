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
    var htmlka = $('#partners-list').html();
    var content = tmpl(htmlka, partners);
    $('.partners').append(content);   

// $('.grid').isotope({
//   // options...
//   itemSelector: '.grid-item',
//   masonry: {
//     columnWidth: 50px;
//     margin-right: 5px;
//   }
// });
 
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    }); 
// $('.grid').isotope({
//   percentPosition: true,
//   itemSelector: '.grid-item',
//   masonry: {
//     columnWidth: '.grid-sizer'
//   }
// })
});

