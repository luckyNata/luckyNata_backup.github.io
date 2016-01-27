$(function(){
    'use strict';
    var objData = [
                {   question: 'Что такое HTML?',
                    answer1: 'Язык для создания анимаций',
                    answer2: 'Язык гипертекстовой разметки',
                    answer3: 'Язык супертекстовой разметки',
                    key: 1
               },
               {    question: 'Что такое CSS?',
                    answer1: "Язык для описания внешнего вида документа",
                    answer2: "Язык, позволяющий выполнять запросы к серверу",
                    answer3: "Язык для генерации html",
                    key: 2
               },
               {    question: 'Что такое javascript?',
                    answer1: "Язык прототипирования",
                    answer2: "Язык для подключения к базе данных",
                    answer3: "Язык программирования",
                    key: 3
               }];

    var rightAnswers = ['Язык гипертекстовой разметки', 'Язык для описания внешнего вида документа', 'Язык программирования'];
    var temp=[];

       for (var i=0; i<objData.length; i++){
       
          localStorage.setItem('answersAndQuestion[i]', JSON.stringify(objData[i]));      //записали в localStorage
          temp[i] = localStorage.getItem('answersAndQuestion[i]');                        //вытащили из localStorage
          temp[i] = JSON.parse(temp[i]);
       }

    var htmlka = $('#test').html();
    var content = tmpl(htmlka, {data: temp});  //сгенерировали контент
        $('[type=submit]').before(content);         //вставили перед кнопкой

 
    //только один checkbox
    $('.checkbox').on('click', change);
    
      function change(){
        $(this).parent().siblings().children().filter(':checked').not(this).removeAttr('checked');
      }

    //событие на кнопку
    var submit = $('input[type="submit"]');
        submit.one('click', checking);
   
    //проверка ответов
      function checking(){
        var answersBlock = $('.answersBlock');
        var numberCheckedAnswers = $('.answersBlock input:checkbox:checked').length;
        
        if (numberCheckedAnswers < answersBlock.length){
          alert('Пожалуйста, ответьте на все вопросы');
          return;
        }
 
      var checkedAnswers=[];
          $('.answersBlock input:checkbox:checked').each(function(){
              checkedAnswers.push($(this).val());
          });
 
      var arrResult =[];

           for(var j=0; j<checkedAnswers.length; j++){
                console.log('checkedAnswers',checkedAnswers[j]);
                  if (checkedAnswers[j] === rightAnswers[j]){
                    arrResult.push('true');
                  } else{ arrResult.push('false');
                    }
            }//for

      var resultsForModal = [];
         
          for(var k=0; k<arrResult.length; k++){
            if(arrResult[k] == 'true'){
                resultsForModal[k] = '<span style="color:green">Правильный ответ!</span>';
            } else {
                resultsForModal[k] = 'Не правильный ответ!';
              }
          }

console.log(resultsForModal);
      event.preventDefault();
      var modal = $('<div class="modal"><h3>Результаты теста</h3></div>');
      var wrapper = $('.wrapper');
          wrapper.append(modal);
      
          for (var z=0; z<rightAnswers.length; z++){
               var questionDiv = $('<div class="questionTitle">'+(z+1)+'.'+objData[z].question+'</div>');
               modal.append(questionDiv);
               var answerDiv = $('<div class="answer warning">'+resultsForModal[z]+'</div>');
               modal.append(answerDiv);
          }
  $(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".modal"); 
    if (!div.is(e.target) 
    && div.has(e.target).length === 0) { 
      div.hide(); // скрываем его
    location.reload();
    }
  });
    
    }//function 'checking'
});//function ready