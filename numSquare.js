var myArray = []
var numSquare = function (maxNum) {
		for (var i = 0; i <= maxNum; i += 1) {
		// var sqr = Math.sqrt(i)
		// if (i === (Math.sqrt(i) * Math.floor(i))) ; { attempt 9
		// if (Math.floor(sqr) * i === i ) ; {     //attempt 10 
		if (Math.sqrt(i) % 1 === 0) ; { 		//attempt 11
		// if (Math.sqrt(i).toString()[1] !== '.') { //correct answer
			myArray.push(i);
		}
	}
	return myArray;
} 
console.log(numSquare(20));

//with mine every number 1-20 appears in the array