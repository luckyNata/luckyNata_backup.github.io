$(function(){
	function Animal(name){
 		this.name = name
 	}
 	function Dog(name){
 		this.name = name,
 		this.bark = function(){
 			return 'Dog '+this.name+' is barking';
 		}
 	}
	Animal.prototype.getName = function(){
		return this.name;
	}
	Dog.prototype = new Animal;
	var rex = new Animal('rex');
	var dog = new Dog ('Aban');
	console.log(rex.name);
	console.log(dog.getName() === 'Aban');
	console.log(dog.bark() === 'Dog Aban is barking');

	//dog.bark();
	// rex.getName();
	// dog.getName(); 
	if (true){
		alert('hello');
	}
});