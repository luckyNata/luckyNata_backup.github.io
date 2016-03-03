'use strict';

var questions = {
    '1': {
        'title': 'What is HTML?',
        'answers': ['How To Make Landingpage', 'Hypertext Markup Language', 'Objective Programming Language'],
        'check': 1
    },
    '2': {
        'title': 'What is CSS?',
        'answers': ['Censor Sold Solar System', 'Central Sugar Station', 'Cascading Style Sheets'],
        'check': 2
    },
    '3': {
        'title': 'What is JavaScript?',
        'answers': ['Analog of Java with more functions', 'High-level interpreted programming language', 'Language of Javas in Star Wars'],
        'check': 1
    }
};

var temp = [];

localStorage.setItem('answersAndQuestion', JSON.stringify(questions)); //записали в localStorage
temp = localStorage.getItem('answersAndQuestion'); //вытащили из localStorage
temp = JSON.parse(temp);
console.log(temp);

var htmlka = $('#test').html();
var content = tmpl(htmlka, temp); //сгенерировали контент
$('[type=submit]').before(content); //вставили перед кнопкой

var change = function change(e) {
    var target = e.target;
    $(target).parent().siblings().children().filter(':checked').not(target).removeAttr('checked');
};

//проверка ответов
var checking = function checking() {
    var answersBlock = $('.answersBlock');
    var indexAnswers = []; //массив для отмеченных ответов
    $('.answersBlock input:checkbox:checked').each(function () {
        var id = $(this).attr('id');
        var numberOfQuestion = id.substr(0, 1); //узнали номер вопроса
        var index = +numberOfQuestion - 1;
        var numberOfAnswer = id.substr(2); // узали номер ответа (первый, второй или третий)
        indexAnswers[index] = +numberOfAnswer;
    });
    console.log(indexAnswers);

    var arrResult = []; //  массив с результатом теста для пользователя
    for (var j = 0; j < answersBlock.length; j++) {
        if (indexAnswers[j]) {
            // если был отмеченным ответ на вопрос, то сравниваем
            var check = temp[j + 1].check; // достали правильный ответ из начального объекта
            if (indexAnswers[j] === check) {
                //сравнили
                arrResult[j] = '<span style="color:green">Правильный ответ!</span>';
            } else {
                arrResult[j] = 'Не правильный ответ!';
            }
        } else {
            arrResult[j] = 'Не правильный ответ!'; // если не было галочки, значит ошибка!
        }
    } //for

    event.preventDefault();
    var modal = $('<div class="modal"><h3>Результаты теста</h3></div>');
    var wrapper = $('.wrapper');
    wrapper.append(modal); // формируем модальное окно с результатами

    for (var z = 0; z < answersBlock.length; z++) {
        var questionDiv = $('<div class="questionTitle">' + (z + 1) + '.' + temp[z + 1].title + '</div>');
        modal.append(questionDiv);
        var answerDiv = $('<div class="answer warning">' + arrResult[z] + '</div>');
        modal.append(answerDiv);
    }
    $(document).mouseup(function (e) {
        // событие клика по веб-документу
        var div = $(".modal");

        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.hide; // скрываем его
            location.reload();
        }
    });
}; //function 'checking'

//только один checkbox
$('.checkbox').on('click', change);

var submit = $('input[type="submit"]');
submit.one('click', checking);
