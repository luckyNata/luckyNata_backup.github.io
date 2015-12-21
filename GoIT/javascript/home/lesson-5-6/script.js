	var hours = 0;
	var min = 0;
	var sec = 0;
	var milisec = 0;


	var wrapper = document.querySelector('.wrapper');
	var timerPlace = document.createElement('div');
	wrapper.appendChild(timerPlace);
	timerPlace.classList.add('col-md-4', 'col-md-offset-4');
	timerPlace.innerHTML ='00 : 00 : 00 : 000';

	var divButtons = document.createElement('div');
	wrapper.appendChild(divButtons);
	divButtons.classList.add('buttonsContainer');

	var buttonStart = document.createElement('button');
	divButtons.appendChild(buttonStart);
	buttonStart.classList.add("btn", 'btn-success');
	buttonStart.setAttribute('type', 'button');
	buttonStart.innerHTML = 'Start';
	buttonStart.addEventListener('click', timerStart);

	var buttonReset = document.createElement('button');
	divButtons.appendChild(buttonReset);
	buttonReset.classList.add("btn", 'btn-primary');
	buttonReset.setAttribute('type', 'button');
	buttonReset.innerHTML = 'Reset';
	buttonReset.addEventListener('click', timerReset);

	function timeShow(){
		milisec = milisec + 4;
		if (milisec%1000 === 0){
			sec++;
			milisec = 0;
				if (sec%60 === 0){
					min++;
					sec = 0;
						if (min%60 === 0){
							hours++;
							min = 0;
						} 
				} 
		} 
		
		if(sec < 10){
			valueSec = '0'+ sec;
		} else {
			valueSec = sec;
		}
		if(min < 10){
			valueMin = '0'+ min;
		} else {
			valueMin = min;
		}
		if(hours < 10){
			valueHours = '0'+ hours;
		} else {
			valueHours = hours;
		}
			timerPlace.innerHTML = valueHours+' : '+ valueMin+ ' : ' + valueSec +' : '+ milisec;
	} 

	function timerStart(){
		buttonStart.classList.remove('btn-success');
		buttonStart.classList.add('btn-warning');
		buttonStart.innerHTML = 'Pause';
		buttonStart.removeEventListener('click', timerStart);
		buttonStart.addEventListener('click', timerStop);
		buttonReset.addEventListener('click', timerReset)
		timerId = setInterval(timeShow, 1);
	}

	function timerStop(){
		buttonStart.classList.remove('btn-warning');
		buttonStart.classList.add('btn-success');
		buttonStart.innerHTML = 'Continue';
		buttonStart.removeEventListener('click', timerStop);
		buttonStart.addEventListener('click', timerStart);
		clearInterval(timerId);
	}
	function timerReset(){
		buttonStart.classList.remove('btn-warning');
		buttonStart.classList.add('btn-success');
		buttonStart.innerHTML = 'Start';
		clearInterval(timerId);
		timerPlace.innerHTML ='00 : 00 : 00 : 000';
		buttonReset.removeEventListener('click', timerReset);
		buttonStart.addEventListener('click', timerStart);
		milisec = 0;
		sec = 0;
		min = 0; 
		hours = 0;
	}




	



