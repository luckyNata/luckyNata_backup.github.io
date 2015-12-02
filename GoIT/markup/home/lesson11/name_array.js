var arrNames = new Array;
for (var i = 0; i < 5; i++) {
	
	do {
		var name = prompt("Введите имя:");
	}	while ( (!name) || (name==' ') || (name=='null') );

		arrNames[i] = name;
}

var newName = prompt("Введите имя для сравнения:");
var temp;

for (var i = 0; i < arrNames.length; i++) {
	
	if ( newName == arrNames[i] ) {
		alert(newName+', вы успешно вошли.');
		temp = '1';
		break;
	} else {
		temp = '0';
	}
}
if (temp == '0') {
	alert('Извините, такой пользователь не зарегистрирован!');
}