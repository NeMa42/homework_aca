// Homework 3 | 19/02/2020
// --- Problem 1 ---

function strAndArr(str, arr){
	let thWord = 0;
	let newStr = [];

	var strArr = str.split(""); 
	for( let i = 0; i< strArr.length; i++){
		if(strArr[i] == "_"){
			strArr[i] = arr[thWord];
			thWord++;
		}
	}
	let result = strArr.join("");
	console.log(result)

}

// strAndArr("_, we have a _.", ["Houston", "problem"])


// --- Problem 2 ---

function numberArr(arr){
let newArr = [];

for (let i = arr.length-1; i>=0; i--){
	if(typeof arr[i] === "number"){
		if(arr[i]%2 == 1){
			newArr.unshift(arr[i]);
		}else{
			newArr.push(arr[i]);
		}
	}
}
console.log(newArr)
}

// numberArr([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3])


// --- Problem 3 ---

function numOfNumAndStr (arr){
	let numberElements = 0;
	let stringElements = 0;

	for (let i = 0; i< arr.length; i++){
		if(typeof arr[i] == "number"){
			numberElements++;
		}else if(typeof arr[i] == "string"){
			stringElements++;
		}
	}
	console.log("Numbers: "+ numberElements + ", Strings: " + stringElements)
}
// numOfNumAndStr([1, "10", "hi", 2, 3])


// --- Problem 4 ---

function sumOfLengths (arr){ 

	let max = arr[0].length;
	let min = arr[0].length;

	for (let i = 1; i<arr.length; i++){
		if(arr[i].length> max){
			max = arr[i].length;
		}
		if(arr[i].length< min){
			min = arr[i].length;
		}
	}
	let result = max + min;

	console.log(result)
}

// sumOfLengths(["anymore", "raven", "me", "communicate"])

// --- Problem 5 ---


function sumArrayElements (arr){
	let sum = 0;

	for(let i  = 0; i <arr.length; i++){
		if(typeof arr[i] == "number"){
			sum += arr[i];
		}
	}console.log(sum)
}
// sumArrayElements([1, 12, 4])

// --- Problem 6 ---

function between (arr){
	newArr = [];

	for (let i = 0; i<=arr.length-2; i++){
		let newEl = arr[i] * arr[i+1];
		newArr.push(newEl);
	}
	console.log (newArr);
}
// between( [3,7,12,5,20,0])