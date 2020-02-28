// Homework 4 | 27/02/2020

// --- Problem  1 ---

function fibonacci(number){
    
    let sequence = [];
    a=0; // first fib num
    b=1;// second fib num

    while(a<=number){
        sequence.push(a); 
         
        keeper=b; 
        b+=a;
        a=keeper
    }
    return (sequence)
}
   
fibonacci(10)


// --- Problem  2 ---


function     QuotAndRem (n){
  let sum = 0;
  let prod = 1;
  let res;
  
  for (let i = n; i>0;i= (i-i%10)/10){
    sum += i%10;
    prod *= i%10;
  }
  if(sum == 0){
    console.log("Cannot calculate")
  }
  else if (prod%sum==0){
    res = prod/sum;
    console.log("Quotient is " + res)
  }
  else{
    res = prod%sum;
    console.log("Remainder is " + res)
  }
}
    
QuotAndRem(1)


// --- Problem  3 ---

function findTheElement (arr){
	
	let min = arr[0];
	let max = arr[0];
	let dif;

	for(i= 1; i<arr.length; i++){
		if(min>arr[i]){
			min = arr[i];
		}
		if(max<arr[i]){
			max = arr[i];
		}
	}

	dif = max - min;
	if(arr.indexOf(dif)== -1){
	 	return false
	 }
	else{
	 	return true
	 }

}

findTheElement ([1,10,2,9,3,9,4])


// --- Problem 4 --- 

function secondMax (arr){
		let max = arr[0];
		let second = arr[1];

	for(i = 1; i<arr.length; i++){
		if(max<arr[i]){
			second = max;
			max = arr[i];
		}

		else{
			if(second < arr[i]){
				second = arr[i]
			}

		}
	}
	
	let res = arr.indexOf(second)
	console.log(res)
}

// --- Problem 5 --- 

function paddingAndRepeat (arr, padAmount, repeat){

	if(arr.length>padAmount){
		let start = arr.slice(0, padAmount);
		let end = arr.slice(arr.length-padAmount,arr.length);

		for (i = 1; i<=repeat; i++){
			arr = start.concat(arr,end);
		}
	}
	else{
		arr = "Invalid padding amount"
	}

		return arr

}

// paddingAndRepeat([1,2,3,4], 1, 3)


// --- Problem 6 --- 

function SquareOfAsterisk(number){
	let res = "";

	for(let i = 0; i<number; i++){
	let row = "";
        for (let m = 0; m<number ; m++){
	        row += ' * ';
	    }
		res += row;
		res += "\n";    
	}

	return res
}  


// --- Problem 7 ---

function squareFrame (number){
	let res = "";

	
	for(i=1; i<=number; i++){
		if(i==1 || i==number){
			for(j=1; j<=number; j++){
				res+=' * '
			}
			res+='\n'
		}
		else{
			res+=' * '
			for(k=1; k<=number-2;k++){
				res+='   '
			}
			res+=' * '
			res+='\n'
		}

	}
	return res
}  

console.log(squareFrame(13))

// --- Problem 8 --- 


function PaternOfANumber(number){
	let res = "";

	for(let i = 0; i<number*2; i++){
	let row = "";

	    if (i <= number){
	        for (let m = 1; m<= i ; m++){
	        row += m;
	        }
	    }
	    else{
	        for(let j = 1; j <number*2- i; j++ ){
	             row += j;
	        } 
	    }
	res += row;
	res += "\n";
	}
	return res
}