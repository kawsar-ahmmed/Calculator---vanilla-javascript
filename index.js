// new calcluter

var Num1 = prompt('Enter Your Number: ');
var Num2 = prompt('Enter Your Number: ');

Num1 = parseInt(Num1, 10);
Num2 = parseInt(Num2, 10);
// result

var result, show;
// print

show = document.write('<b> Calclutor: </b> <br/> <br/> ')

result = Num1 + Num2;
show = document.write('Result (+) : ')
document.write(Num1 + " + " + Num2 + " = " + result + " <br/> <br/> ");
// minus121

result = Num1 - Num2;
show = document.write('Result (-) : ')
document.write(Num1 + " - " + Num2 + " = " + result + " <br/><br/>  ");
// minus

result = Num1 * Num2;
show = document.write('Result (*) : ')
document.write(Num1 + " * " + Num2 + " = " + result + " <br/> <br/> ");
// minus

result = Num1 / Num2;
show = document.write('Result (/) : ')
document.write(Num1 + " / " + Num2 + " = " + result + " <br/> <br/> ");
// modulas

result = Num1 % Num2;
show = document.write('Result (%) : ')
document.write(Num1 + " % " + Num2 + " = " + result + " <br/> <br/> ");
// minus
