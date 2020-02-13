// Homework 1  |  12/01/2020


// // --- Problem 1 ---

// let a , b, c;

// if(a == 0 || b == 0 || c == 0){
// 	alert ("undefined")
// }
// else if ((a > 0 && b>0 && c<0) || (a>0 && c>0 && b<0) || (b>0 && c>0 && a<0) || (a<0 && b<0 && c<0)){
// alert ("-")
// }
// else{
// alert ("+")
// }

// // --- Problem 2 ---

// let a;
// let number;
// let lastDigit = number%10;
// let result;

// for(let m = number; m>0; m = (m-lastDigit)/10){
// 	lastDigit= m%10;
// 	if (lastDigit === a){
// 	result = "Yes";	
// 	 break}
// 	else {
// 		result = "No";
// 	}
// }
// alert(result)



// // --- Problem 3 ---

// // Սա երկու տարբերակով եմ լուծել։ Էս մեկը մի քիչ խառն ա, բայց թվերով ա լուծած։  

// let number;  
// let lastDigit = number%10;
// let firstDigit;
// let repet = 0; // ստեղ կարայի -1 տայի, միանգամից m<10 - ում էլ repet-- -ի կարիք չէր լինի, բայց սենց ավելի պատկերավոր ա թվում։

// if(number ==0 ){
// 	alert(number);
// } else{
// 	for  (let m = Math.abs(number); m>0; m = (m- m%10)/10){
// 		repet ++;
// 		if(m<10){
// 			firstDigit = m;
// 			repet--
// 		}
// 	}

// 	let middle  = ((Math.abs(number) - Math.pow (10,repet)*firstDigit - Math.abs(lastDigit)))/10;

// 	if (middle  <0){
// 		alert(number);
// 	} else if (middle == 0){
// 		alert (" "+ lastDigit + firstDigit)
// 	} else {
// 		alert(" "+ lastDigit + middle + firstDigit)
// 	}

// }

// // ---- էս էլ երկրորդ տարբերակն ա ----


// let num = prompt ("Type a random number");
// let lastDigit = num[num.length-1];
// let firstDigit;

// if (isNaN(num)){
// 	alert("The inputed value is not valid. Please, type a number.")
// }else{
// 	if(num[0] == "-"){
// 		firstDigit = num[1];
// 		num = num.slice(2, num.length-1);
// 		alert("-" + lastDigit+num+firstDigit);
// 	}else{
// 		firstDigit = num[0];
// 		num = num.slice(1, num. length-1)
// 		alert(lastDigit + num + firstDigit);
// 	}
// }


// // --- Problem 4 ---

// function order(a,b,c){

// let myArr = [a,b,c];
// let max = myArr[0];
// let min = myArr[0]; 
// let middle;
// let indMax = 0;
// let indMin = 0; 

// for (let i = 1; i< myArr.length; i++){
// 	if(max < myArr[i]){
// 		max = myArr[i];
// 		indMax = i;
// 	} 

// 	if (min> myArr[i]){
// 		min = myArr[i]
// 		indMin = i;
// 	}

// } 
// if (indMin < indMax){
// 	middle = myArr.splice(indMax,1);
// 	middle = myArr.splice(indMin, 1);
// }else {
// 	middle = myArr.splice(indMin, 1);
// 	middle = myArr.splice(indMax, 1);
// }
// alert(min + " " + myArr + " "+ max)

// }

// order (7, -2, 9) //example

// // --- Problem 5 ---

// let D, x, res1, res2;


// function quad(a,b,c){

// a*Math.pow(x,2) + b*x + c ==0;

// if (a == 0){
// 	alert("Enter valid constans.")
// }else{
// 	D = Math.pow(b,2)- 4*a*c;
// 	if(D<0){
// 		alert("Solution does not exist.")
// 	}else if(D==0){
// 		res1 = (-b-Math.sqrt(D))/(2*a);
// 		alert("Solution is " + res1)
// 	}else{
// 	res1 = (-b-Math.sqrt(D))/(2*a);
// 	res2 = (-b+Math.sqrt(D))/(2*a);
// 	alert ("Solutions are " + res1+ " and " + res2);
// }
// }
// }

// quad(5, -13, 6)

// // --- Problem 6 ---


// var n = +prompt();

// var i = 0;
// var j = 0;

// if(n%2 === 0 && !Math.floor(n/10)){
// 	i+=1;
// }
// if(n%3 === 0 && n%10 === 1){
// 	j+= 1;
// }


// // --- Problem 7 ---

// let area;
// let figure = prompt("Please, choose one of the forms: rectangle or triangle");
// let num1  = +prompt("Please, enter a number");
// let num2 = +prompt("Please, enter another one");

// if(num1<=0 || num2<=0){
// 	alert("Please, enter only positives");
// }else{
// 	if(figure === "triangle"){
// 		area = num1/2 * num2;
// 		alert ("The are of the form is " + area)
// 	}else if(figure === "rectangle"){
// 		area = num1  * num2;
// 		alert ("The are of the form is " + area)
// 	}
// 	else {
// 		alert("Please, enter the word properly")
// 	}
// }


// // --- Problem 8 ---

let arr = prompt("Type a number");
arr = String(Math.abs(+arr));

let max = arr[0];
let min = arr[0];
for(let i = 1; i<= arr.length-1; i++){
	if(max<arr[i]){
		max = arr[i]
	}
	if(min> arr[i]){
		min = arr[i]
	}
}
let dif = max - min;
alert (dif)