
var obj = {
	newElement: function(tagName, clName, typeName, text, parentName) {

		var element = document.createElement(tagName);
		element.classList.add(clName);
		element.innerHTML = text;
		
		if ( (typeName) && (typeName!=' ') ){
					
		element.setAttribute('type', typeName);
		}

		parentName.appendChild(element);
		return element;
	},

	number: function(questions, answers){
		for (var i = 0; i < questions; i++){
			var smallDiv = obj.newElement('div', 'container', '','', form);
			var questionTitle = this.newElement('H4', 'qustionStyle', '', (i + 1)+'. Вопрос №' + (i + 1), smallDiv); 

			for (var j = 0; j < answers; j++){
				var answersPart = obj.newElement('div', 'answers_container', '','', smallDiv);
				var label = this.newElement('label', 'answersStyle', '', 'Вариант ответа №' + (j + 1), answersPart);
				var checkbox = this.newElement('input', 'checkbox', 'checkbox', '', answersPart);
				label.parentNode.insertBefore(checkbox, label);
			}
		};

	}
}  

var body = document.querySelector('body');

var div = obj.newElement('div', 'wrapper', '','', body);
obj.newElement('H3', 'test_title', '','Тест по программированию', div);
var form = obj.newElement('form', 'form', '','', div);
obj.number(3, 3);
obj.newElement('button', 'btn', '', 'Проверить мои результаты', form);


