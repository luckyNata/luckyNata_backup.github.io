function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++){
  	result *=x;
  }
  return result;
}

var x = prompt('Введите число для возведения в степень:');
var n = prompt('Введите степень:');

if (n < 0) {
  n = prompt("Введите положительную степень:");
  console.log( pow(x, n) );
} else {
  //alert('lf');
   console.log( pow(x, n) );
  }

