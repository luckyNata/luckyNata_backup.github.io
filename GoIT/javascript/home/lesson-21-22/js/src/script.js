 let questions = {
    '1': {
        'title': 'What is HTML?',
        'answers': [
            'How To Make Landingpage',
            'Hypertext Markup Language',
            'Objective Programming Language'
            
        ],
        'check': 1
        },
    '2': {
        'title': 'What is CSS?',
        'answers': [
            'Censor Sold Solar System',
            'Central Sugar Station',
            'Cascading Style Sheets'
        ],
        'check':2
        },
    '3': {
        'title': 'What is JavaScript?',
        'answers': [
            'Analog of Java with more functions',
            'High-level interpreted programming language',
            'Language of Javas in Star Wars'
        ],
        'check':1
       },
}
		
		let temp = [];

          localStorage.setItem('answersAndQuestion', JSON.stringify(questions));      //записали в localStorage
          temp = localStorage.getItem('answersAndQuestion');                        //вытащили из localStorage
          temp = JSON.parse(temp);
          console.log(temp);

    let htmlka = $('#test').html();
    let content = tmpl(htmlka, temp);  //сгенерировали контент
        $('[type=submit]').before(content);         //вставили перед кнопкой
 
 
 	let change = (e) => {
 		let target = e.target;
 		$(target).parent().siblings().children().filter(':checked').not(target).removeAttr('checked');
 	};
  
    //проверка ответов
    let checking = () =>{
        let answersBlock = $('.answersBlock');
        let indexAnswers=[];        //массив для отмеченных ответов
          $('.answersBlock input:checkbox:checked').each(function(){
              let id = $(this).attr('id');
              let numberOfQuestion = id.substr(0,1); //узнали номер вопроса
              let index = +numberOfQuestion-1;
              let numberOfAnswer = id.substr(2);// узали номер ответа (первый, второй или третий)
              indexAnswers[index] = +numberOfAnswer;  
          });
              console.log(indexAnswers);

    let arrResult =[]; //  массив с результатом теста для пользователя
    for(let j=0; j<answersBlock.length; j++){       
      if(indexAnswers[j]){ // если был отмеченным ответ на вопрос, то сравниваем
          let check = temp[j+1].check;// достали правильный ответ из начального объекта
          if (indexAnswers[j] === check){ //сравнили
            arrResult[j]='<span style="color:green">Правильный ответ!</span>';
          } else{ arrResult[j]='Не правильный ответ!';
            }
      } else {
          arrResult[j]='Не правильный ответ!'; // если не было галочки, значит ошибка!
        }     
    }//for

      event.preventDefault();
      let modal = $('<div class="modal"><h3>Результаты теста</h3></div>');
      let wrapper = $('.wrapper');
          wrapper.append(modal); // формируем модальное окно с результатами
      
          for (let z=0; z<answersBlock.length; z++){
               let questionDiv = $('<div class="questionTitle">'+(z+1)+'.'+temp[z+1].title+'</div>');
               modal.append(questionDiv);
               let answerDiv = $('<div class="answer warning">'+arrResult[z]+'</div>');
               modal.append(answerDiv);
          }
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let div = $(".modal"); 
    
    if (!div.is(e.target)&& div.has(e.target).length === 0) { 
      div.hide; // скрываем его
      location.reload();
    }
  });
    
    }//function 'checking'

    //только один checkbox
    $('.checkbox').on('click', change);
    
    let submit = $('input[type="submit"]');
        submit.one('click', checking);



