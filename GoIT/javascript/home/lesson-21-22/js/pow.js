function pow(x, n) {
  var result = 1;

    for (var i = 0; i < n; i++){
  	 result *=x;
    }
    return result;
 }

var x ;//= prompt('Введите число для возведения в степень:');
var n;// = prompt('Введите степень:');
var answer;
var temp;

//alert(Math.pow(x,n));

if ( (x < 0) && (n%2 == 0) ) {
  temp = 0;
} else if ( (x < 0) && (n%2 != 0) ){
  temp = 1;
} else {
  temp = 0;
}
x = Math.abs(x);

if ( (n < 0) && (x!=0) ) {

  n = Math.abs(n);
  answer = 1/pow(x, n);

} else if ( (n < 0) && (x==0) ) {

    answer = alert ("Ошибка!");

  } else if (n == 0) {

      answer = '1';

    } else if (n > 0) {

       answer = pow(x, n);
  }

  if (temp == 0){
    console.log(answer);
  } else {
    console.log('-'+answer);
  }
 module.exports = pow;
