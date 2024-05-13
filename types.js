var price = 100;
// console.log(typeof price);
var isHappy = true;
// console.log(typeof isHappy)
var friends = 'number';
// console.log(typeof friends)

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2)
sum = parseFloat(sum)
// sum = parseInt(sum);
// console.log(sum);

var giveMoney = 1000;
var apple = 400;
var oranges = 300;
var sum = apple + oranges;
var shopkeeper = giveMoney - sum;
// console.log(shopkeeper);

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bungla = 99.50;
var totlePrice = Mathematics + Biology + Chemistry + Physics + Bungla;
var gorPrice = totlePrice / 5;
gorPrice = gorPrice.toFixed(2)
// console.log(gorPrice);

var firstLine = 'I am going to be';
var secandLine = 'an awesome web developer.'; 
var fullLine = firstLine +' '+ secandLine;
// console.log(fullLine);

var numbers = [23, 34, 56, 67, 78, 90];
// console.log(numbers[3])
var element = numbers[1];
// console.log(element)
numbers[1] = 66;
numbers[3] = 44;
// console.log(numbers)
var positionIndex = numbers.indexOf(90);
// console.log(positionIndex);

// console.log(totale)

var numbers = [34, 85, 45, 98, 55];
// numbers.push(66);
var element = numbers.pop();
// numbers.unshift(22);
numbers.shift();
// console.log(element);
// console.log(numbers);

// console.log(5 > 6);
// console.log(5 < 6);
// console.log(5 == 6);
// console.log(6 == 6);
// console.log(5 != 6);
// console.log(6 != 6);
// console.log(5 <= 6);
// console.log(6 <= 6);
// console.log(16 <= 6);
// console.log(15 >= 6);
// console.log(5 >= 6);
// console.log(5 >= 5);

var num1 = 34;
var num2 = 45;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 == num2);
// console.log(num1 !== num2);
// console.log(num1 >= num2);
// console.log(num1 <= num2);

// multiple conditions
// money > money && result1 > result2 && heigth1 > heigth2;
// money > money || result1 > result2 || heigth1 > heigth2;

// conditional
var iphonePrice = 79000;
var myBadget = 99000;
if(iphonePrice <= myBadget){
    // console.log('iphone kine photani merbo')
}
else{
    // console.log('ami vevo phone kinbo')
}


var number1 = 45;
var number2 = 78;
if(number1 !== number2){
    // console.log('Ami cole jabo dhaka.')
}
else{
    // console.log('Ami barite chole jabo.')
}

var isgregut = true;
var selari = 57000;
var cars = 1;
// if(isgregut == true && selari > 50000 && cars >= 1){
//     console.log('Tore bmuiay kori dimu.')
// }
// else{
//     console.log('Tor kopale bay nai.')
// }

var isGregut = false;
var selari = 41000;
cars = 1;
if(isGregut == true || selari > 40000){
    // console.log('Aesho prem kori');
}
else{
    // console.log('Tor frender number de')
}

// var money = 50;
// var potpta = 55;
// var krimfun = 45;
// var energi = 56;
// var ickrem = 23;
// if(potpta < money){
//     console.log('potpta kabo ami')
// }
// else if(krimfun < money){
//     console.log('ami krimfun kabo')
// }
// else if(energi < money){
//     console.log('energi bickit kabo')
// }
// else if(ickrem < money){
//     console.log('ami ickrim kabo')
// }
// else{
//     console.log('Tea kabo.')
// }

var math = true;
var gometry = true;
if(gometry == true){
    
}


var fruits = ['Apple', 'banana', 'orange'];
var positionIndex = fruits.indexOf('banana');
// console.log(positionIndex);
fruits[1] = 'Mango';
// console.log(fruits);
fruits.pop();
fruits.push('Watermelon')
// console.log(fruits);

var nameSubject = ['Bangla', 'English', 'Math', 'Camisti'];
var positionIndex = nameSubject.indexOf('Camisti');
// console.log(positionIndex);
nameSubject[2] = 'Amer';
// console.log(nameSubject);
var element = nameSubject[3];
// console.log(element);
// console.log(typeof nameSubject);

var num1 = 34;
var num2 = 45;
var num3 = 56;
var num4 = 90;
var sum = num1 + num2 + num3 + num4;
var gorsum = sum / 4;
gorsum = gorsum.toFixed(1);
var reminder = num1 % num2 % num3 % num4;
reminder = reminder.toFixed(1);
// console.log(reminder);

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2)
sum = parseFloat(sum)
sum = parseInt(sum);
// console.log(sum);

//  var number = 0;
//  while(number < 7){
//     console.log('Ami aiber ak number hobo.')
//     console.log(number);
//     number++;
//  }

// targat : 1 to 10 all numbers
var number = 1;
while(number <= 20){
    // console.log('Ami kalke barite jamo.');
    // console.log(number);
    number++;
}

// even number
var number = 0;
while(number <= 20){
    // console.log(number);
    // number++;
    number = number + 2;
}

// odd numbers
var number = 1;
while(number <= 20){
    // console.log(number);
    number = number + 2;
}


// for loop
for(var roastGiven = 0; roastGiven < 7; roastGiven++){
    // console.log('Roast Den, Please!!');
}
// simple version of for loop
/* console.log('simple for loop') [Alt + shift + a]
for(var i = 0; i < 7; i++){
    console.log(i)
} */

/* for(var i = 0; i <= 10; i++){
    console.log(i);
} */

// i = i + 2;
// i += 2; 
// even numbers
for(var i = 0; i <= 20; i+=2){
    // console.log(i);
}

// odd numbers
for(var i = 1; i <= 20; i+=2){
    // console.log(i);
}

// array dicliyer
var numbers = [34, 45, 67, 46, 76, 90, 55,77];
for(var i = 0; i < 7; i++){
    // console.log('numan')
}




for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    // console.log(number);/
}

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    // console.log(number)
}

var items = ['bottol', 'mouse', 'sunglass', 'pen', 'notbook'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    // console.log(item)
}

// break
for(var i = 1; i <= 20; i++){
    // console.log(i);
    if(i > 10){
        break;
    }
}

for(var i = 1; i < 30; i++){
    // console.log(i);
    if(i > 23){
        break;
    }
}

var items = ['bottol', 'mous', 'sunglass', 'pen', 'notbook'];
for(var i = 0; i < items.length; i++){
    var item = items[i];
    if(item == 'pen'){
        break;
    }
    // console.log(item);
}

var numbers = [34, 45, 46, 90, 12, 43, 54, 65];
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 60){
        break;
    }
    console.log(number);
}