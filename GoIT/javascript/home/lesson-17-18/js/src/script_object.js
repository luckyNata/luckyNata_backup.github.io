$(function(){
 function Human(name, gender){
 	this.name = name,
 	this.age = 30,
 	this.sex = gender,
 	this.height = 185,
 	this.weight = 80 
 }

 function Worker(title){
 	this.company = title,
 	this.salary = 2000;
 }
 Worker.prototype = new Human;
 
 Worker.prototype.toWork = function(){
	alert('Я работаю с 8:00 до 17:00');
 };
	
 function Student(place){
 	this.placeOfStuding = place,
 	this.scholarship = 100
 }
Student.prototype = new Human;

Student.prototype.watchSeries = function(seriesName){
	alert('Я смотрю мой любимый сериал '+seriesName+'');
};
	
	var Alex = new Worker("Google");
	var Kate = new Student("KPI");

 // console.log(Kate.placeOfStuding);
 // console.log(Kate.age);
 // console.log(Kate.watchSeries("Friends"));

		console.log(Human);
		console.log(Alex);
		console.log(Kate);
});