//-A function that takes at least three arguments and returns the result of some set of operations using those arguments - 5 points

const f1 = function(a, b, c) {
	return a*b%c
};
console.log(f1(10, 3, 5))


//-A function that takes no arguments and returns something - 5 points
const f2 = function() {
	return "This function returns nothing."
};


//-A function that takes arguments, does something but does not return anything - 6 points
const f3 = function (q,w) {
	q/w
};


//-A function that takes three strings and returns the string that is the longest.  - 6 points
const f4 = function (str1,str2,str3){
	let longestString = str1;
	if (longestString.length < str2.length){
		longestString = str2;
	
	};	else if (longestString.length < str3.length){
		longestString = str3;
	}
	
	return longestString;
};


//-A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger - 6 points
const f5 = function (num1,num2){
	if (num1 === num2){
		return 0;
	}else if (num1 > num2){
		return 1;
	}else{
		return -1
	};
};


//-Create a multiply function (that multiplies the two given arguments together and returns the result) - 2 points
const f6 = function (m1,m2){
	return m1 * m2;
};


//-Create a divide function (that divides the first argument by the second and returns the result) - 2 points
const f7 = function(d1,d2){
	return d1 / d2;
};


//-Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 

const triangleArea = function(base, height) {
	return f7(f6(base, height), 2);
};



//-Create a function called numLength that takes a number and returns the number of characters in the number 
//(example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length - 6 points
const numLength = function(number){
	return ('' + number).length;
};



//-Create a function that takes two strings and a number.  If the length of the two strings concatenated 
//together is greater than the given number, return 1, else return -1.  - 6 points
const f8 = function(string1, string2, number){
	if (('' + string1 + string2).length > number){
		return 1;
	} else{
		return -1;
	};
};



//-Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle',
// return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle
// (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.   - 10 points
const runStuff = function(number1, number2, string){
	if(string === 'rectangle'){
		return number1 * number2;
	} else if(string === 'triangle'){
		return triangleArea(number1, number2);
	} else{
		return -1;
	};
};